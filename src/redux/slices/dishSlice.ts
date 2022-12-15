import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { assignFilters } from "@components/food/helpers/filter";
import { toast } from "react-hot-toast";

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  vegetarian: boolean;
  rating: number;
  category: string;
}

export interface Pagination {
  size: number;
  count: number;
  current: number;
}

export type IDishDto = { dishes: Array<Dish>; pagination: Pagination };
type StateParams = {
  status: string;
  currentDish: Dish;
};

type State = IDishDto & StateParams;

const initialState = {} as State;

export const fetchDishesWithSearchParams = createAsyncThunk(
  "dishes/fetchDishesByParams",
  async (
    searchParams: any,
    { rejectWithValue },
  ) => {
    try {
      //@ts-ignore
      const params = await assignFilters(searchParams);

      let URL = "";

      if (!params.categories && !params.sorting) {
        URL = `https://food-delivery.kreosoft.ru/api/dish?page=${params.page || 1}&vegetarian=${params.vegetarian || false}`;
      } else if (params.categories && params.sorting) {
        URL = `https://food-delivery.kreosoft.ru/api/dish?page=${params.page || 1}&vegetarian=${params.vegetarian || false}&categories=${params.categories.join('&categories=')}&sorting=${params.sorting}`;
      } else if (params.categories && !params.sorting) {
        URL = `https://food-delivery.kreosoft.ru/api/dish?page=${params.page || 1}&vegetarian=${params.vegetarian || false}&categories=${params.categories.join('&categories=')}`;
      } else {
        URL = `https://food-delivery.kreosoft.ru/api/dish?page=${params.page || 1}&vegetarian=${params.vegetarian || false}&sorting=${params.sorting}`;
      }
      const response = await axios.get(URL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const fetchDish = createAsyncThunk(
  "dishes/fetchDishById",
  async (
    id: string, {rejectWithValue}
  ) => {
    try {
      const response = await axios.get(`https://food-delivery.kreosoft.ru/api/dish/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const checkDishRating = createAsyncThunk(
  "dishes/checkRating",
  async (
    params: {token: string; id: string}, {rejectWithValue}
  ) => {
    try {
      const response = await axios.get(`https://food-delivery.kreosoft.ru/api/dish/${params.id}/rating/check`, {
        headers: {
          Authorization: `Bearer ${params.token}`,
        }
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const addRating = createAsyncThunk(
  "dishes/addRating",
  async (
    params: {token: string; id: string, score: number}, {rejectWithValue}
  ) => {
    try {
      const response = await axios.post(`https://food-delivery.kreosoft.ru/api/dish/${params.id}/rating?rating=${params.score}`, {}, {
        headers: {
          Authorization: `Bearer ${params.token}`,
        }
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDishesWithSearchParams.fulfilled, (state: State, action) => {
        state.status = "fulfilled";
          state.dishes = action.payload.dishes;
          state.pagination = action.payload.pagination;
      })
      .addCase(fetchDishesWithSearchParams.rejected, (state: State) => {
          state.status = "rejected";
      })
      .addCase(fetchDish.fulfilled, (state: State, action) => {
        state.status = "fulfilled";
          state.currentDish = action.payload;
      })
      .addCase(fetchDish.rejected, (state: State) => {
          state.status = "rejected";
      })
      .addCase(checkDishRating.fulfilled, (state: State, action) => {
        state.status = "fulfilled";
        if (!action.payload) {
          toast.error("Вы не можете оценить блюдо, которое не пробовали", {
            duration: 2000,
            style: { fontFamily: "Montserrat" },
          });
        }
      })
      .addCase(checkDishRating.rejected, (state: State) => {
        toast.error("Возникла ошибка", {
          duration: 1000,
          style: { fontFamily: "Montserrat" },
        });
        state.status = "rejected";
    })
    .addCase(addRating.fulfilled, (state: State) => {
      state.status = "fulfilled";
      toast.success("Ваша оценка успешно добавлена", {
        duration: 1000,
        style: { fontFamily: "Montserrat" },
      });
    })
    .addCase(addRating.rejected, (state: State) => {
        state.status = "rejected";
        toast.error("Возникла ошибка", {
          duration: 1000,
          style: { fontFamily: "Montserrat" },
        });
    })
  },
});

export default dishSlice.reducer;

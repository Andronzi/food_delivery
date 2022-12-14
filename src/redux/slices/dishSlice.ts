import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { assignFilters } from "@components/food/helpers/filter";

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
      .addCase(fetchDishesWithSearchParams.rejected, (state: State, action: any) => {
          state.status = "rejected";
          state.pagination = action.payload.pagination;
      })
      .addCase(fetchDish.fulfilled, (state: State, action) => {
        state.status = "fulfilled";
          state.currentDish = action.payload;
          state.pagination = action.payload.pagination;
      })
      .addCase(fetchDish.rejected, (state: State, action: any) => {
          state.status = "rejected";
          state.pagination = action.payload.pagination;
      })
  },
});

export default dishSlice.reducer;

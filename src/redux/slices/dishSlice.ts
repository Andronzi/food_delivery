import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
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
};

type State = IDishDto & StateParams;

const initialState = {} as State;

export const fetchDishes = createAsyncThunk(
  "dishes/fetchDishesByPage",
  async (
    searchParams: any,
    { rejectWithValue },
  ) => {
    try {
      // @ts-ignore
      console.log(searchParams);
      //@ts-ignore
      const params = await assignFilters(searchParams);
      // console.log("ПАРАМЕТРЫ " + params.categories.map((element) => element.substring(1, element.length - 1)).join("");

      console.log("ИТОГОВЫЕ" + params.vegetarian + params.page + params.categories);

      let URL = "";

      if (!params.categories && !params.sorting) {
        URL = `https://food-delivery.kreosoft.ru/api/dish?page=${params.page || 1}&vegetarian=${params.vegetarian}`;
      } else if (params.categories && params.sorting) {
        URL = `https://food-delivery.kreosoft.ru/api/dish?page=${params.page || 1}&vegetarian=${params.vegetarian}&categories=${params.categories.join('&categories=')}&sorting=${params.sorting}`;
      } else if (params.categories && !params.sorting) {
        URL = `https://food-delivery.kreosoft.ru/api/dish?page=${params.page || 1}&vegetarian=${params.vegetarian}&categories=${params.categories.join('&categories=')}`;
      } else {
        URL = `https://food-delivery.kreosoft.ru/api/dish?page=${params.page || 1}&vegetarian=${params.vegetarian}&sorting=${params.sorting}`;
      }

      console.log(URL)

      const response = await axios.get(URL);

      console.log(response.data);

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
    builder.addCase(
      fetchDishes.fulfilled,
      (state: State, action: PayloadAction<State>) => {
        state.status = "fulfilled";
        state.dishes = action.payload.dishes;
        state.pagination = action.payload.pagination;
      },
    );
  },
});

export default dishSlice.reducer;

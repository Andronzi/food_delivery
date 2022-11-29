import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

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
  async (pageNumber: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://food-delivery.kreosoft.ru/api/dish?vegetarian=false&page=${pageNumber}`,
      );
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

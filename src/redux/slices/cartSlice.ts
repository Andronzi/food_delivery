import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface CartDish {
  id: string;
  name: string;
  price: number;
  totalPrice: number;
  amount: number;
  image: string;
}

type CartState = {
  dishes: Array<CartDish>;
  loading: string;
  currentRequestId: undefined | string;
  error: null | unknown;
  errorMessage: null | string;
};

export const getCartDishes = createAsyncThunk(
  "getCartDishes",
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://food-delivery.kreosoft.ru/api/basket`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const addDish = createAsyncThunk(
  "addDishToCart",
  async (params: { token: string; dishId: number }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://food-delivery.kreosoft.ru/api/basket/dish/${params.dishId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${params.token}`,
          },
        },
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    dishes: [] as CartDish[],
    loading: "idle",
    currentRequestId: undefined,
    error: null,
    errorMessage: null,
  } as CartState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCartDishes.pending, (state: CartState, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
          state.error = null;
          state.errorMessage = null;
        }
      })
      .addCase(getCartDishes.fulfilled, (state: CartState, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.dishes = action.payload;
          state.error = null;
          state.currentRequestId = undefined;
          state.errorMessage = null;
        }
      })
      .addCase(getCartDishes.rejected, (state: CartState, action: any) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.error = action.error.message;
          state.currentRequestId = undefined;
          state.errorMessage = action.payload.message;
        }
      })
      .addCase(addDish.pending, (state: CartState, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
          state.error = null;
          state.errorMessage = null;
        }
      })
      .addCase(addDish.fulfilled, (state: CartState, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.error = null;
          state.currentRequestId = undefined;
          state.errorMessage = null;
        }
      })
      .addCase(addDish.rejected, (state: CartState, action: any) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.error = action.error.message;
          state.currentRequestId = undefined;
          state.errorMessage = action.payload.message;
        }
      })
  },
});

export default cartSlice.reducer;

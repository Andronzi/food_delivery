import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type OrderState = {
  loading: string;
  currentRequestId: undefined | string;
  error: null | unknown;
  errorMessage: null | string;
};

export const addOrder = createAsyncThunk(
  "addOrder",
  async (params: { token: string; deliveryTime: Date, address: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://food-delivery.kreosoft.ru/api/order`,
        {
            deliveryTime: params.deliveryTime,
            address: params.address
        },
        {
          headers: {
            Authorization: `Bearer ${params.token}`,
          },
        },
      );
      return response.data;
    } catch (err) {
        console.log(err);
      return rejectWithValue(err);
    }
  },
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    loading: "idle",
    currentRequestId: undefined,
    error: null,
    errorMessage: null,
  } as OrderState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addOrder.pending, (state: OrderState, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
          state.error = null;
          state.errorMessage = null;
        }
      })
      .addCase(addOrder.fulfilled, (state: OrderState, action) => {
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
      .addCase(addOrder.rejected, (state: OrderState, action: any) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.error = action.payload.name;
          state.currentRequestId = undefined;
          state.errorMessage = action.payload.response.data.message;
        }
      })
  },
});

export default orderSlice.reducer;

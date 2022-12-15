import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CartDish } from "./cartSlice";

interface IOrder {
	id: string;
  deliveryTime: Date;
  orderTime: Date;
  status: string;
  price: number;
}

interface IExtendedOrder extends IOrder {
	address: string;
	dishes: CartDish[];
}

type OrderState = {
	currentOrder: IExtendedOrder;
	orders: IOrder[];
  loading: string;
  currentRequestId: undefined | string;
  error: null | unknown;
  errorMessage: null | string;
};

export const getOrders = createAsyncThunk(
    "getOrders",
    async (token: string, { rejectWithValue }) => {
        try {
            const response = await axios.get(
              `https://food-delivery.kreosoft.ru/api/order`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              },
            );
            return response.data;
          } catch (err) {
              console.log(err);
            return rejectWithValue(err);
          }
    }
)

export const getOrder = createAsyncThunk(
	"getOrder",
	async (params: {token: string, id: string}, { rejectWithValue }) => {
			try {
					const response = await axios.get(
						`https://food-delivery.kreosoft.ru/api/order/${params.id}`,
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
	}
)

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

export const confirmOrder =  createAsyncThunk(
  "confirmOrder",
  async (params: { token: string; orderId: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://food-delivery.kreosoft.ru/api/order/${params.orderId}/status`,
        {},
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
		currentOrder: {} as IExtendedOrder,
		orders: [] as IOrder[],
    loading: "idle",
    currentRequestId: undefined,
    error: null,
    errorMessage: null,
  } as OrderState,
  reducers: {
    deleteOrders: state => {
      state.orders = [];
    },
  },
  extraReducers: builder => {
    builder
    	.addCase(getOrders.pending, (state: OrderState, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
          state.error = null;
          state.errorMessage = null;
        }
      })
      .addCase(getOrders.fulfilled, (state: OrderState, action) => {
				console.log(action.payload);
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
					state.orders = action.payload;
          state.loading = "idle";
          state.error = null;
          state.currentRequestId = undefined;
          state.errorMessage = null;
        }
      })
      .addCase(getOrders.rejected, (state: OrderState, action: any) => {
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
			.addCase(getOrder.pending, (state: OrderState, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
          state.error = null;
          state.errorMessage = null;
        }
      })
      .addCase(getOrder.fulfilled, (state: OrderState, action) => {
				console.log(action.payload);
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
					state.currentOrder = action.payload;
          state.loading = "idle";
          state.error = null;
          state.currentRequestId = undefined;
          state.errorMessage = null;
        }
      })
      .addCase(getOrder.rejected, (state: OrderState, action: any) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
					state.currentOrder = {} as IExtendedOrder;
          state.loading = "idle";
          state.error = action.payload.name;
          state.currentRequestId = undefined;
          state.errorMessage = action.payload.response.data.message;
        }
      })
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
      .addCase(confirmOrder.pending, (state: OrderState, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
          state.error = null;
          state.errorMessage = null;
        }
      })
      .addCase(confirmOrder.fulfilled, (state: OrderState, action) => {
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
      .addCase(confirmOrder.rejected, (state: OrderState, action: any) => {
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

export const { deleteOrders } = orderSlice.actions;
export default orderSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface User {
  fullName: string;
  password: string;
  email: string;
  address: string;
  birthDate: Date;
  gender: string;
  phoneNumber: string;
}

export interface Auth {
  password: string;
  email: string;
}

type State = {
  loading: string;
  currentRequestId: undefined | string;
  data: null | string;
  error: null | unknown;
};

export const createUser = createAsyncThunk(
  "registerUser",
  async (user: User, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://food-delivery.kreosoft.ru/api/account/register`,
        user,
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const authUser = createAsyncThunk(
  "loginUser",
  async (authCredentials: Auth, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://food-delivery.kreosoft.ru/api/account/login`,
        authCredentials,
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const registerSlice = createSlice({
  name: "register",
  initialState: {
    user: {} as User,
    loading: "idle",
    data: null,
    currentRequestId: undefined,
    error: null,
  } as State,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createUser.pending, (state: State, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(createUser.fulfilled, (state: State, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          localStorage.setItem('token', action.payload.token);
          state.currentRequestId = undefined;
        }
      })
      .addCase(createUser.rejected, (state: State, action: any) => {
        // console.log(action.payload.response.data);
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      })
      .addCase(authUser.pending, (state: State, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(authUser.fulfilled, (state: State, action) => {
        console.log(action.payload);
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          localStorage.setItem('token', action.payload.token);
          state.currentRequestId = undefined;
        }
      })
      .addCase(authUser.rejected, (state: State, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      });
  },
});

export default registerSlice.reducer;

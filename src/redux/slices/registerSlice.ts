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
  error: null | unknown;
  errorMessage: null | string[];
  token: null | string;
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

export const logout = createAsyncThunk(
  "logoutUser",
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://food-delivery.kreosoft.ru/api/account/logout`,
        {},
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

const registerSlice = createSlice({
  name: "register",
  initialState: {
    loading: "idle",
    currentRequestId: undefined,
    error: null,
    errorMessage: null,
    statusCode: null,
    token: null || localStorage.getItem("token"),
  } as State,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createUser.pending, (state: State, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
          state.error = null;
          state.errorMessage = null;
        }
      })
      .addCase(createUser.fulfilled, (state: State, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.error = null;
          state.currentRequestId = undefined;
          state.errorMessage = null;
          state.token = action.payload.token;
          localStorage.setItem("token", action.payload.token);
        }
      })
      .addCase(createUser.rejected, (state: State, action: any) => {
        console.log(action);
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.error = action.error;
          state.currentRequestId = undefined;
          state.errorMessage = action.payload.response.data.errors;
        }
      })
      .addCase(authUser.pending, (state: State, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
          state.error = null;
          state.errorMessage = null;
        }
      })
      .addCase(authUser.fulfilled, (state: State, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.error = null;
          state.currentRequestId = undefined;
          state.errorMessage = null;
          state.token = action.payload.token;
          localStorage.setItem("token", action.payload.token);
        }
      })
      .addCase(authUser.rejected, (state: State, action: any) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.error = action.error;
          state.currentRequestId = undefined;
          state.errorMessage = action.payload.message;
        }
      })
      .addCase(logout.pending, (state: State, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
          state.error = null;
          state.errorMessage = null;
        }
      })
      .addCase(logout.fulfilled, (state: State, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.token = null;
          localStorage.setItem("token", "");
          state.error = null;
          state.currentRequestId = undefined;
          state.errorMessage = null;
        }
      })
      .addCase(logout.rejected, (state: State, action: any) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.token = null;
          localStorage.setItem("token", "");
          state.error = action.error;
          state.currentRequestId = undefined;
          state.errorMessage = action.payload.message;
        }
      });
  },
});

export default registerSlice.reducer;

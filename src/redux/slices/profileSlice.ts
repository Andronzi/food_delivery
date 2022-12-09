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

type ProfileState = {
  user: User;
  loading: string;
  currentRequestId: undefined | string;
  error: null | unknown;
  errorMessage: null | string;
  isRedirected: boolean;
};

export const getProfile = createAsyncThunk(
  "getProfile",
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://food-delivery.kreosoft.ru/api/account/profile`,
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

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    user: {} as User,
    loading: "idle",
    currentRequestId: undefined,
    error: null,
    errorMessage: null,
    isRedirected: false
  } as ProfileState,
  reducers: {
    changeRedirection: (state) => {
      state.isRedirected = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getProfile.pending, (state: ProfileState, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
          state.error = null;
          state.errorMessage = null;
        }
      })
      .addCase(getProfile.fulfilled, (state: ProfileState, action) => {
        console.log(action)
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.user = action.payload;
          state.user.email = action.payload.email;
          state.error = null;
          state.currentRequestId = undefined;
          state.errorMessage = null;
        }
      })
      .addCase(getProfile.rejected, (state: ProfileState, action: any) => {
        console.log(action)
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
      });
  },
});

export const { changeRedirection } = profileSlice.actions;
export default profileSlice.reducer;

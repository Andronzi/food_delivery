import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  isOpen: boolean;
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

export const editProfile = createAsyncThunk(
  "editProfile",
  async (params: {token: string, data: User}, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `https://food-delivery.kreosoft.ru/api/account/profile`,
        {
          fullName: params.data.fullName,
          address: params.data.address,
          birthDate: params.data.birthDate,
          gender: params.data.gender,
          phoneNumber: params.data.phoneNumber
        },
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

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    user: {} as User,
    isOpen: false,
    loading: "idle",
    currentRequestId: undefined,
    error: null,
    errorMessage: null,
    isRedirected: false,
  } as ProfileState,
  reducers: {
    toggleOpenOfUserEditForm: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },

    deleteUser: state => {
      state.user = {} as User;
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
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.user = action.payload;
          state.error = null;
          state.currentRequestId = undefined;
          state.errorMessage = null;
        }
      })
      .addCase(getProfile.rejected, (state: ProfileState, action: any) => {
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
      .addCase(editProfile.pending, (state: ProfileState, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
          state.error = null;
          state.errorMessage = null;
        }
      })
      .addCase(editProfile.fulfilled, (state: ProfileState, action) => {
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
      .addCase(editProfile.rejected, (state: ProfileState, action: any) => {
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

export const { toggleOpenOfUserEditForm ,deleteUser } = profileSlice.actions;
export default profileSlice.reducer;

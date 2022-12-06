import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface User {
    fullName: string;
    password: string;
    email: string;
    gender: string;
}

type State = {
    loading: string;
    user: User;
    currentRequestId: undefined | string;
    error: null | unknown;
}

export const createUser = createAsyncThunk(
    "register/createUser",
    async (user, { rejectWithValue }) => {
      try {
        const response = await axios.post(
          `https://food-delivery.kreosoft.ru/api/account/register`, user);
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
      loading: 'idle',
      currentRequestId: undefined,
      error: null
    } as State,
    reducers: {},
    extraReducers: builder => {
      builder.addCase(
        createUser.pending,
        (state: State, action) => {
          if (state.loading === 'idle') {
            state.loading = 'pending';
            console.log(action);
            state.currentRequestId = action.meta.requestId;
          }
        })
        .addCase(createUser.fulfilled, (state: State, action) => {
          const { requestId } = action.meta;
          if (state.loading === 'pending' && state.currentRequestId === requestId) {
            state.loading = 'idle'
            state.user = action.payload;
            state.currentRequestId = undefined;
          }
        })
        .addCase(createUser.rejected, (state: State, action) => {
          const { requestId } = action.meta;
          if (
            state.loading === 'pending' && state.currentRequestId === requestId
          ) {
            state.loading = 'idle';
            state.error = action.error;
            state.currentRequestId = undefined;
          }
        })
    }
  })

  export default registerSlice.reducer;
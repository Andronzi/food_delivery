import { configureStore } from "@reduxjs/toolkit";
import dishReducer from "@redux/slices/dishSlice";
import registerReducer from "@redux/slices/registerSlice";

export const store = configureStore({
  reducer: {
    dish: dishReducer,
    registration: registerReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import dishReducer from "@redux/slices/dishSlice";
import registerReducer from "@redux/slices/registerSlice";
import profileReducer from "@redux/slices/profileSlice";
import cartReducer from "@redux/slices/cartSlice";

export const store = configureStore({
  reducer: {
    dish: dishReducer,
    registration: registerReducer,
    profile: profileReducer,
    cart: cartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

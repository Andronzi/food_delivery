import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { deliverySplitApi } from "./services/deliverySplitApi";

export const store = configureStore({
    reducer: {
        [deliverySplitApi.reducerPath]: deliverySplitApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(deliverySplitApi.middleware),
})

setupListeners(store.dispatch);
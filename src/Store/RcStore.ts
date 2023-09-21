import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../React-components/List/list-api-slice";

export const RcStore = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof RcStore.dispatch;
export type RootState = ReturnType<typeof RcStore.getState>;

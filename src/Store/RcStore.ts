import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../Slices/Api-slice";

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

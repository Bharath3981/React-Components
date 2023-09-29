import { configureStore } from "@reduxjs/toolkit";
import { ListApiSlice } from "../Slices/ListApiSlice";

export const RcStore = configureStore({
  reducer: {
    [ListApiSlice.reducerPath]: ListApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(ListApiSlice.middleware);
  },
});

export type AppDispatch = typeof RcStore.dispatch;
export type RootState = ReturnType<typeof RcStore.getState>;

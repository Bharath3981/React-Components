import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../Services/Services";

// initialize an empty api service that we'll inject endpoints into later as needed
export const BaseApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: () => ({}),
});

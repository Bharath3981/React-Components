import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { jsonPlaceHolderBaseURL } from "../Services/Services";

// initialize an empty api service that we'll inject endpoints into later as needed
export const BaseJSONPlanceHolderApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: jsonPlaceHolderBaseURL }),
  endpoints: () => ({}),
});

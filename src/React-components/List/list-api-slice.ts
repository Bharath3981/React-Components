import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../Services/Services";

export interface listItemType {
  id: string;
  name: string;
  title: string;
  image: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  endpoints: (builder) => {
    return {
      fetchBasicList: builder.query<any[], number | void>({
        query() {
          return "RCData/RCList/BasicList.json";
        },
      }),
    };
  },
});

export const { useFetchBasicListQuery } = apiSlice;

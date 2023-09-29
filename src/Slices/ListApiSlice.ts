import { BaseApiSlice } from "./BaseApiSlice";

export const ListApiSlice = BaseApiSlice.injectEndpoints({
  endpoints: (build) => ({
    fetchBasicList: build.query({
      query() {
        return "RCData/RCList/BasicList.json";
      },
    }),
  }),
  overrideExisting: true,
});

export const { useFetchBasicListQuery } = ListApiSlice;

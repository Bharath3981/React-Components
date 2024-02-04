import { BaseJSONPlanceHolderApiSlice } from "./BaseJSONPlaceHolderApiSLice";

export const ReactTopicApiSlice = BaseJSONPlanceHolderApiSlice.injectEndpoints({
  endpoints: (build) => ({
    fetchUsersList: build.query({
      query() {
        return "users";
      },
    }),
  }),
  overrideExisting: true,
});

export const { useFetchUsersListQuery } = ReactTopicApiSlice;

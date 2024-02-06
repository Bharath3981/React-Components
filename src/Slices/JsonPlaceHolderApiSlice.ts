import { BaseJSONPlanceHolderApiSlice } from "./BaseJSONPlaceHolderApiSLice";

export const JsonPlaceHolderApiSlice =
  BaseJSONPlanceHolderApiSlice.injectEndpoints({
    endpoints: (build) => ({
      fetchUsersList: build.query({
        query() {
          return "users";
        },
      }),
      fetchAlbumsList: build.query({
        query() {
          return "albums";
        },
      }),
    }),
    overrideExisting: true,
  });

export const { useFetchUsersListQuery, useFetchAlbumsListQuery } =
  JsonPlaceHolderApiSlice;

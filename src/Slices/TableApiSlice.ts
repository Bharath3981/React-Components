import { BaseApiSlice } from "./BaseApiSlice";

export const TableApiSlice = BaseApiSlice.injectEndpoints({
  endpoints: (build) => ({
    fetchBasicTableData: build.query({
      query() {
        return "RCData/RCTable/BasicTable.json";
      },
    }),
  }),
  overrideExisting: true,
});

export const { useFetchBasicTableDataQuery } = TableApiSlice;

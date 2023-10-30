import { BaseApiSlice } from "./BaseApiSlice";

export const TableApiSlice = BaseApiSlice.injectEndpoints({
  endpoints: (build) => ({
    fetchBasicTableData: build.query({
      query() {
        return "RCData/RCTable/BasicTable.json";
      },
    }),
    fetchActionTableData: build.query({
      query() {
        return "RCData/RCTable/ActionTable.json";
      },
    }),
  }),
  overrideExisting: true,
});

export const { useFetchBasicTableDataQuery, useFetchActionTableDataQuery } =
  TableApiSlice;

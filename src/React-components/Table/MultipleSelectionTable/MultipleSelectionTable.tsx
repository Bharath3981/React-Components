import { useState, useEffect } from "react";
import { useFetchBasicTableDataQuery } from "../../../Slices/TableApiSlice";
import RcTable from "../RcTable";

const MultipleSelectionTable = () => {
  const response = useFetchBasicTableDataQuery(null);
  const { data = [], isSuccess } = response;
  const [selectedRows, setSelectedRows] = useState<Array<string | number>>([]);
  const [rows, setRows] = useState(data);
  const onSelected = (
    event: any,
    row: any,
    selectedRows: Array<number | string>
  ) => {
    setSelectedRows([...selectedRows]);
    console.log(event, row);
  };
  const options = {
    keyAttribute: "DepartmentId",
    gridlines: true,
    selectionMode: "multiple",
    selected: [10, 40],
    onSelected: onSelected,
  };
  const columns = [
    {
      label: "Department Id",
      field: "DepartmentId",
    },
    {
      label: "Department Name",
      field: "DepartmentName 1",
    },
    {
      label: "Type",
      field: "Type",
    },
    {
      label: "Manager Id",
      field: "ManagerId",
    },
    {
      label: "Start date",
      field: "StartDate",
    },
    {
      label: "Rating",
      field: "Rating",
    },
  ];
  useEffect(() => {
    if (response.isSuccess) {
      setRows(data);
    }
  }, [data]);
  return (
    <div>
      <div className="text-2xl font-semibold">Table Component</div>
      <div className="text-gray-400 text-sm">RcTable Multiple selection</div>
      <span>A table displays data items in a tabular format.</span>
      <span>Simple Table with Javascript Array data.</span>
      <div>Selected rows: {JSON.stringify(selectedRows)}</div>
      <div className="">
        {isSuccess && (
          <RcTable
            classes="h-96"
            data={{ rows, setRows }}
            columns={columns}
            options={options}
          >
            <template
              render={(row: any) => (
                <>
                  <td className="px-3 py-1">{row.DepartmentId}</td>
                  <td className="px-3 py-1">{row.DepartmentName}</td>
                  <td className="px-3 py-1">{row.Type}</td>
                  <td className="px-3 py-1">{row.ManagerId}</td>
                  <td className="px-3 py-1">{row.StartDate}</td>
                  <td className="px-3 py-1">{row.Rating}</td>
                </>
              )}
            ></template>
          </RcTable>
        )}

        {/* <div role="status" className="max-w-sm animate-pulse">
          <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <span className="sr-only">Loading...</span>
        </div> */}
      </div>
    </div>
  );
};

export default MultipleSelectionTable;

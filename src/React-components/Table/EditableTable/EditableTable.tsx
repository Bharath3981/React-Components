import { useEffect, useState } from "react";
import { useFetchActionTableDataQuery } from "../../../Slices/TableApiSlice";
import RcTable from "../RcTable";
import { GiCheckMark } from "react-icons/gi";
import { RiDeleteBinLine } from "react-icons/ri";
import useSessionStorage from "../../../hooks/useSessionStorage";

const EditableTable = () => {
  const response = useFetchActionTableDataQuery(null);
  const { data = [], isSuccess } = response;
  const [selectedRows] = useState<Array<string | number>>([]);
  const [rows, setRows] = useSessionStorage("tableRows", data);

  const options = {
    keyAttribute: "EmployeeId",
    gridlines: true,
  };
  const columns = [
    {
      label: "First Name",
      field: "FirstName",
    },
    {
      label: "Revenue",
      field: "Revenue",
    },
    {
      label: "Target Complete",
      field: "TargetComplete",
    },
    {
      label: "Salary",
      field: "Salary",
    },

    {
      label: "Rating",
      field: "Rating",
    },
    {
      label: "Status",
      field: "Status",
    },
    {
      label: "Action",
      field: "",
    },
  ];
  useEffect(() => {
    if (response.isSuccess) {
      setRows(data);
    }
  }, [data]);
  const approve = (row: any) => {
    let temp = [...rows];
    row.Status = "Approved";
    temp.splice(row.key, 1, row);
    setRows(temp);
  };

  const deleteRow = (row: any) => {
    let temp = [...rows];
    temp.splice(row.key, 1);
    setRows(temp);
  };
  return (
    <div>
      <div className="text-2xl font-semibold">Table Component</div>
      <div className="text-gray-400 text-sm">RcTable Action table</div>
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
              render={(row: any, index: number) => (
                <>
                  <td className="px-3 py-1">{row.FirstName}</td>
                  <td className="px-3 py-1">{row.Revenue}</td>
                  <td className="px-3 py-1">{row.TargetComplete}</td>
                  <td className="px-3 py-1">{row.Salary}</td>
                  <td className="px-3 py-1">{row.Rating}</td>
                  <td className="px-3 py-1">{row.Status}</td>
                  <td className="px-3 py-1">
                    <div className="flex">
                      {row.Status === "Approved" && (
                        <button className="btn text-gray-300" disabled>
                          <GiCheckMark />
                        </button>
                      )}
                      {row.Status === "Pending" && (
                        <button
                          className="btn text-green-600"
                          onClick={() => approve(row)}
                        >
                          <GiCheckMark />
                        </button>
                      )}
                      <button
                        className="btn text-red-600"
                        onClick={() => deleteRow(row)}
                      >
                        <RiDeleteBinLine />
                      </button>
                    </div>
                  </td>
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

export default EditableTable;

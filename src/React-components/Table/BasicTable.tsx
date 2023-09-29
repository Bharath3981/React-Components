import { useFetchBasicTableDataQuery } from "../../Slices/TableApiSlice";
import RcTable from "./RcTable";

const BasicTable = () => {
  const { data = [], isFetching } = useFetchBasicTableDataQuery(null);
  console.log(data);
  return (
    <div>
      <div className="text-2xl font-semibold">Table Component</div>
      <div className="text-gray-400 text-sm">RcTable Basic table</div>
      <span>A table displays data items in a tabular format..</span>
      <span>Simple Table with Javascript Array data.</span>
      <div className="p-3 my-2 border h-96 overflow-auto">
        {isFetching && <RcTable />}
      </div>
    </div>
  );
};

export default BasicTable;

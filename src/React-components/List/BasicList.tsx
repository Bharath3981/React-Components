import RcList, { RcListOptions } from "./RcList";
import { baseURL, fetchData } from "../../Services/Services";
import { useEffect, useState } from "react";
import { useFetchBasicListQuery } from "./list-api-slice";

const BasicList = () => {
  //const [list, setList] = useState<Array<Object>>([]);
  const getBasicList = async () => {
    return fetchData("RCData/RCList/BasicList.json");
  };
  const options: RcListOptions = {
    gridlines: true,
    selectionMode: "single",
    selected: [3],
  };
  const { data = [], isFetching } = useFetchBasicListQuery();
  console.log(data, isFetching);

  return (
    <div>
      <div className="text-2xl font-semibold">List Component</div>
      <div className="text-gray-400 text-sm">RcList</div>
      <span>A list view displays data items as a list or a grid.</span>
      <span>This demo shows as list</span>
      <div className="p-3 my-2 border">
        {
          <RcList data={data} options={options}>
            <template
              render={(row: any) => (
                <div className="flex p-2">
                  <div>
                    <img
                      src={baseURL + "RCData/RCList/" + row.image}
                      alt="company logo"
                      className="h-11 w-11 border rounded-md"
                    />
                  </div>
                  <div className="pl-3 self-center">
                    <div className="text-base font-normal">{row.name}</div>
                    <div className="text-gray-500 text-sm font-normal">
                      {row.title}
                    </div>
                  </div>
                </div>
              )}
            ></template>
          </RcList>
        }
      </div>
    </div>
  );
};

export default BasicList;

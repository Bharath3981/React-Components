import React, { useState } from "react";

type MutliSelecBoxProps = {
  list: any[];
  startingText: "string";
  doneClickEvent?: (p: any) => void;
  setList?: any;
  apply_to_non_categorized_artifacts?: boolean;
};
const RcMultiSelectBox = ({
  list,
  startingText,
  setList,
}: MutliSelecBoxProps) => {
  const [show, setShow] = useState(false);
  console.log(list);
  const onChecked = (e: React.ChangeEvent, index: number) => {
    list[index][list[index].id] = true;
    console.log(list[index][list[index].id]);
    setList((prevState: any) => {
      const tempObj = { ...prevState[index] };
      console.log(tempObj);
      tempObj[tempObj.id] = !tempObj[tempObj.id];
      const tempArray = [...prevState];
      tempArray.splice(index, 1, tempObj);
      return tempArray;
    });
  };
  return (
    <div>
      <div id="dropDown" className="relative">
        <button
          className="w-64 text-left"
          onClick={() => setShow((preState) => !preState)}
        >
          <span>{startingText}</span>
        </button>
        <div
          className={`${
            show ? "block" : "hidden"
          } z-10 bg-white absolute top-9 w-64 border border-gray-200 h-72 rounded-md`}
        >
          <div className="flex justify-around pt-1">
            <button className=" bg-slate-500 text-white">Select All</button>
            <button className="">Done</button>
          </div>
          <ul className="p-3 overflow-x-hidden overflow-y-auto h-60">
            {list.map((item: any, index: number) => {
              return (
                <li key={item.id}>
                  <input
                    className="mr-2"
                    type="checkbox"
                    onChange={(e: any) => onChecked(e, index)}
                  />
                  {`${item.name} (${item.level})`}
                </li>
              );
            })}
          </ul>
        </div>
        <div>cool</div>
      </div>
    </div>
  );
};

export default RcMultiSelectBox;

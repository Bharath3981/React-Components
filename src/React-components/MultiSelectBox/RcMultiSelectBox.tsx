import React, { useRef, useState } from "react";

type MutliSelecBoxProps = {
  list: { id: string; name: string; level: string; [key: string]: string | number | boolean }[];
  startingText?: string;
  doneClickEvent?: (p: { id: string; name: string; level: string; [key: string]: string | number | boolean }) => void;
  setList?: React.Dispatch<React.SetStateAction<{ id: string; name: string; level: string; [key: string]: string | number | boolean }[]>>;
  apply_to_non_categorized_artifacts?: boolean;
};
const RcMultiSelectBox = ({
  list,
  startingText,
  setList,
}: MutliSelecBoxProps) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState(startingText);
  const selectionResult = useRef<{ [key: string]: boolean }>({});
  const selection = (selectedItem: { id: string; name: string; level: string; [key: string]: any }) => {
    if (selectionResult.current[selectedItem.id]) {
      delete selectionResult.current[selectedItem.id];
    } else {
      selectionResult.current[selectedItem.id] = true;
    }
    setText(
      `${Object.keys(selectionResult.current).length} Categories selecte`
    );
    console.log(selectionResult.current);
  };
  const onChecked = (index: number) => {
    selection(list[index]);
    setList && setList((prevState: { id: string; name: string; level: string; [key: string]: any }[]) => {
      const tempObj = { ...prevState[index] };
      tempObj[tempObj.id] = !tempObj[tempObj.id];
      const tempArray = [...prevState];
      tempArray.splice(index, 1, tempObj);
      startingText = "tet";
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
          <span>{text}</span>
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
            {list.map((item: { id: string; name: string; level: string; [key: string]: string | number | boolean }, index: number) => {
              return (
                <li key={item.id}>
                  <input
                    className="mr-2"
                    type="checkbox"
                    checked={!!item[item.id]}
                    onChange={() => onChecked( index)}
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

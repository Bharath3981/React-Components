import React, { useState } from "react";
import RcMultiSelectBox from "../../../React-components/MultiSelectBox/RcMultiSelectBox";
import Options from "./Options.json";
const ComplexStateManipulation = () => {
  const doneClickEvent = (selection: any) => {};
  Options.categories.forEach((option: any) => {
    option[option.id] = false;
  });
  const [list, setList] = useState(Options.categories);
  return (
    <div>
      <div className="main-title">Complex state manipulation</div>
      <div className="pt-3">
        <RcMultiSelectBox
          startingText={"No options selected"}
          list={list}
          setList={setList}
          doneClickEvent={doneClickEvent}
        />
      </div>
    </div>
  );
};

export default ComplexStateManipulation;

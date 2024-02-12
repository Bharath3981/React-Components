import React, { useState } from "react";
import RcMultiSelectBox from "../../../React-components/MultiSelectBox/RcMultiSelectBox";
import Options from "./Options.json";
const ComplexStateManipulation = () => {
  const doneClickEvent = (selection: any) => {};
  Options.categories.forEach((option: any) => {
    option[option.id] = false;
  });
  const [list, setList] = useState(Options.categories);
  const postData = async () => {
    let postdata = {
      id: 123,
      first_name: "Adithya",
      last_name: "Baisetty",
      gender: "male",
      married: false,
      mobile_no: "998902648",
      pincode: 565654,
    };
    const req = await fetch(
      "https://script.google.com/macros/s/AKfycbxAaNjlqFGZoMa7VTKnoBf_YnQ6kxx9BoewyjZL8X_nsX6PkA4-Z0PzXb5qcvpCSBy9/exec?first_name=Adithya&last_name=Baisetty&gender=male&married=false&mobile_no=99889989&pincode=5656565",
      {
        method: "GET",
        mode: "cors",
      }
    );
    const response = await req.json();
    console.log(response);
  };
  return (
    <div>
      <div className="main-title">Complex state manipulation</div>
      <div className="pt-3">
        <button onClick={() => postData()}>Post data</button>
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

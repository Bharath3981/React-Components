import { useRef, useState } from "react";

const BinaryRepresentation = () => {
  const [number, setNumber] = useState("");
  let binaryNumber: any = useRef(0);
  const convertToBinary = (number) => {
    return Number(number).toString(2);
  };
  const numberChange = (e: any) => {
    setNumber(e.target.value);
    binaryNumber.current = convertToBinary(number);
    let binaryArr = binaryNumber.current.split("");
    let positionArray = [];
    binaryArr.forEach((value, index) => {
      if (value === "1") {
        positionArray.push(index + 1);
      }
    });
    console.log(binaryArr, positionArray);
  };
  return (
    <>
      <div className="main-title">Binary Representation</div>
      <div className="pt-2">
        Enter No:{" "}
        <input type="text" value={number} onChange={(e) => numberChange(e)} />
        {binaryNumber.current}
      </div>
    </>
  );
};

export default BinaryRepresentation;

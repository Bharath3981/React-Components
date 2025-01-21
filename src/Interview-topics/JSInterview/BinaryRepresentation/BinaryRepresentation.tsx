import { useRef, useState } from "react";

const BinaryRepresentation = () => {
  const [number, setNumber] = useState("");
  const binaryNumber = useRef<string>("0");
  interface ConvertToBinary {
    (number: string): string;
  }

  const convertToBinary: ConvertToBinary = (number) => {
    return Number(number).toString(2);
  };
  const numberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
    binaryNumber.current = convertToBinary(number);
    const binaryArr = binaryNumber.current.split("");
    const positionArray: number[] = [];
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

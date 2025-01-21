import { useRef, useState } from "react";

const RomanNumber = () => {
  const [number, setNumber] = useState("");
  const romanNumber = useRef("");
  const romanNumerals: Array<{ value: number; numeral: string }> = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  function toRoman(num: number): string {
    if (isNaN(num)) {
      return "";
    }
    let romanNumeral = "";
    for (let i = 0; i < romanNumerals.length; i++) {
      while (num >= romanNumerals[i].value) {
        romanNumeral += romanNumerals[i].numeral;
        num -= romanNumerals[i].value;
      }
    }
    return romanNumeral;
  }

  const numberChange = (number: string) => {
    setNumber(number);
    romanNumber.current = toRoman(Number(number));
  };
  return (
    <>
      <div className="main-title">Roman Representation</div>
      <div className="pt-2">
        Enter No:{" "}
        <input
          type="text"
          value={number}
          onChange={(e) => numberChange(e.target.value)}
        />
        {romanNumber.current}
      </div>
    </>
  );
};

export default RomanNumber;

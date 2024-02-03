import React from "react";
import CodeSnippet from "../../../util/CodeSnippet";
import InfoBlock from "../../../util/InfoBlock";

const ArrayReduceTopic = () => {
  const arr = [5, 1, 3, 2, 6, 4, 3, 23, 9];
  let sum = 0;
  let max = 0;
  sum = arr.reduce((acc: number, curr: number) => {
    console.log(acc);
    return acc + curr;
  });
  max = arr.reduce((acc: number, curr: number) => {
    if (acc > curr) {
      return acc;
    } else {
      return curr;
    }
  });
  console.log(sum, max);
  return (
    <div>
      <div id="arrayReduceTopic" className="sub-title">
        Array reduce
      </div>
      <p className="description">
        Basically the reduce function used at where to take elements of the
        array and come up with single value out of them.
      </p>
      <div className="side-title">Sum of array</div>
      <CodeSnippet>{`const arr = [5, 1, 3, 2, 6, 4, 3, 23, 9];
      arr.reduce((acc: number, curr: number) => {
    console.log(acc);
    return acc + curr;
  });
  //5, 6, 9, 11, 17, 21, 24, 47, 56
//Expected output: 56`}</CodeSnippet>
      <InfoBlock>
        <p className="description">
          Here <code>acc</code> is the accumulator and it will store the
          previously returned value.
        </p>
      </InfoBlock>
      <div className="side-title">Max element of array</div>
      <CodeSnippet>{`const arr = [5, 1, 3, 2, 6, 4, 3, 23, 9]
      max = arr.reduce((acc: number, curr: number) => {
    if (acc > curr) {
      return acc;
    } else {
      return curr;
    }
  });
//Expected output: 23`}</CodeSnippet>
    </div>
  );
};

export default ArrayReduceTopic;

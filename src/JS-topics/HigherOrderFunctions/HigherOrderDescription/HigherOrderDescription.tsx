import CodeSnippet from "../../../util/CodeSnippet";

const HigherOrderDescription = () => {
  const radius = [3, 4, 1, 2];
  const area = (radius: number) => {
    return Math.PI * radius * radius;
  };
  const circumference = (radius: number) => {
    return 2 * Math.PI * radius;
  };
  const calculate = function (radius: Array<number>, logic: any) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
      output.push(logic(radius[i]));
    }
    return output;
  };
  //console.log("Area: ", calculate(radius, area));
  //console.log("Circumference: ", calculate(radius, circumference));
  return (
    <div>
      <p className="description">
        A function whic takes another function as arugumen or returns a function
        form it is called Higher order function.
      </p>
      <div className="side-title">Calculate Area</div>
      <CodeSnippet>{`const radius = [3, 4, 1, 2];
  const area = (radius: number) => {
    return Math.PI * radius * radius;
  };
  const calculate = function (radius: Array<number>, logic: any) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
      output.push(logic(radius[i]));
    }
    return output;
  };
  console.log("Area: ", calculate(radius, area));
  //Expected output: [28.274333882308138, 50.26548245743669, 
  3.141592653589793, 12.566370614359172]`}</CodeSnippet>

      <div className="side-title">Calculate Circumference</div>
      <CodeSnippet>{`const radius = [3, 4, 1, 2];
  const circumference = (radius: number) => {
    return 2 * Math.PI * radius;
  };
  const calculate = function (radius: Array<number>, logic: any) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
      output.push(logic(radius[i]));
    }
    return output;
  };
  console.log("Circumference: ", calculate(radius, circumference));
  //Expected output:  [18.84955592153876, 25.132741228718345, 6.283185307179586, 
  12.566370614359172]`}</CodeSnippet>
    </div>
  );
};

export default HigherOrderDescription;

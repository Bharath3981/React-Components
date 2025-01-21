const SumOfArguments = () => {
  //write a function sum that works like this: sum(a)(b)...(n) = a + b + ... + n
  const sum = (a: number) => {
    const innerSum = (b: number) => {
      return sum(a + b);
    };
    innerSum.valueOf = () => a;
    return innerSum;
  };
  console.log(sum(1)(2)(3)(4)(5)(6)); //15
  return <div className="main-title">sum(a)(b)(c)...(n)</div>;
};

export default SumOfArguments;

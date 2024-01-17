import CodeSnippet from "../../../util/CodeSnippet";

const UseMemoDescription = () => {
  return (
    <div>
      <h1 className="main-title">UseMemo</h1>
      <p className="description">
        <code>useMemo</code> is a React Hook that lets you cache the result of a
        calculation between re-renders.
      </p>
      <CodeSnippet>{`const cachedValue = useMemo(calculateValue, dependencies)`}</CodeSnippet>
      <p className="description">
        <code>calculateValue:</code> The function calculating the value that you
        want to cache. It should be pure, should take no arguments, and should
        return a value of any type. React will call your function during the
        initial render. On next renders, React will return the same value again
        if the dependencies have not changed since the last render. Otherwise,
        it will call calculateValue, return its result, and store it so it can
        be reused later.
      </p>
      <p className="description">
        <code>dependencies:</code> The list of all reactive values referenced
        inside of the calculateValue code.{" "}
      </p>
    </div>
  );
};

export default UseMemoDescription;

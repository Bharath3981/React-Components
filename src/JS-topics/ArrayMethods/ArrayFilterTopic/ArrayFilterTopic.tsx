import CodeSnippet from "../../../util/CodeSnippet";

const ArrayFilterTopic = () => {
  const arra = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const resultArray = arra.filter((value) => value > 5);
  console.log(resultArray);
  return (
    <div>
      <div id="arrayFilterTopic" className="sub-title">
        Array filter
      </div>
      <p className="description">
        The <code>filter()</code> method of Array instances creates a shallow
        copy of a portion of a given array, filtered down to just the elements
        from the given array that pass the test implemented by the provided
        function.
      </p>
      <div className="side-title">Greater than 5</div>
      <CodeSnippet>{`const arra = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  arra.map((value) => value > 5)
  //Expected output  [6, 7, 8, 9]`}</CodeSnippet>
    </div>
  );
};

export default ArrayFilterTopic;

import CodeSnippet from "../../../util/CodeSnippet";

const ArrayMapTopic = () => {
  const arra = [1, 2, 3, 4, 5, 6];
  const resultArray = arra.map((value) => value.toString(2));
  console.log(resultArray);
  return (
    <div>
      <div id="arrayMapTopic" className="sub-title">
        Array map
      </div>
      <p className="description">
        The <code>map()</code> method of Array instances creates a new array
        populated with the results of calling a provided function on every
        element in the calling array.
      </p>
      <div className="side-title">Double the value</div>
      <CodeSnippet>{`const arra = [1,2,3,4,5,6]
arra.map((element) => element * 2)
//Expected output [2, 4, 6, 8, 10, 12]`}</CodeSnippet>
      <div className="side-title">Get binary value</div>
      <CodeSnippet>{`const arra = [1,2,3,4,5,6]
arra.map((element) => element.toString(2))
//Expected output ['1', '10', '11', '100', '101', '110']`}</CodeSnippet>
    </div>
  );
};

export default ArrayMapTopic;

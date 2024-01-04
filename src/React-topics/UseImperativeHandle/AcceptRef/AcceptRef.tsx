import { forwardRef, useRef, useImperativeHandle } from "react";
import CodeSnippet from "../../../util/CodeSnippet";

const MyInput = forwardRef(function MyInput(props: any, ref: any) {
  const myInput: any = useRef(null);
  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          myInput?.current.focus();
        },
        scrollIntoView() {
          myInput?.current.scrollIntoView();
        },
      };
    },
    []
  );
  return <input {...props} ref={myInput} />;
});
const AcceptRef = () => {
  const ref = useRef(null);
  console.log(ref);

  const focusTextBox = () => {
    console.log(ref);
    ref.current.focus();
  };
  return (
    <div>
      Value: {ref?.current?.value}
      <h1 className="sub-title">Accept Ref</h1>
      <MyInput type="text" placeholder="Enter some text" ref={ref} />{" "}
      <button onClick={() => focusTextBox()}>Focus</button>
      <CodeSnippet>{`const MyInput = forwardRef(function MyInput(props: any, ref) {
        useImperativeHandle(
          ref, () => {
            return {
              focus() {
                ref?.current.focus();
              },
              scrollIntoView() {
                ref?.current.scrollIntoView();
              },
            };
          },
          []);
        return <input {...props} ref={ref} />;
      });`}</CodeSnippet>
      <p className="description">
        Now, if the parent component gets a ref to MyInput, it will be able to
        call the focus and scrollIntoView methods on it. However, it will not
        have full access to the underlying <code>input</code> DOM node.
      </p>
    </div>
  );
};

export default AcceptRef;

import { forwardRef, useRef, useImperativeHandle } from "react";

const MyInput = forwardRef(function MyInput(props: any, ref) {
  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          ref?.current.focus();
        },
        scrollIntoView() {
          ref?.current.scrollIntoView();
        },
      };
    },
    []
  );
  return <input {...props} ref={ref} />;
});
const AcceptRef = () => {
  const ref = useRef(null);
  console.log(ref);
  return (
    <div>
      Value: {ref?.current?.value}
      <h1 className="sub-title">Accept Ref</h1>
      <MyInput type="text" placeholder="Enter some text" ref={ref} />
    </div>
  );
};

export default AcceptRef;

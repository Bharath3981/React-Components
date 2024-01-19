import InfoBlock from "../../util/InfoBlock";
import AlwaysRecalculatingValue from "./AlwaysRecalculatingValue/AlwaysRecalculatingValue";
import SkippingRecalcualation from "./SkippingRecalcualtaion/SkippingRecalcualtaion";
import SkippingRecalcualtaionWithMemo from "./SkippingRecalcualtaionWithMemo/SkippingRecalcualtaionWithMemo";
import UseMemoDescription from "./UseMemoDescription/UseMemoDescription";

const UseMemoTopic = () => {
  return (
    <div className="pb-5">
      <UseMemoDescription />
      <SkippingRecalcualation />
      <AlwaysRecalculatingValue />
      <InfoBlock infoType="warning">
        <p className="description">
          If you provide a custom arePropsEqual implementation, you must compare
          every prop, including functions. Functions often close over the props
          and state of parent components. If you return true when
          oldProps.onClick !== newProps.onClick, your component will keep
          “seeing” the props and state from a previous render inside its onClick
          handler, leading to very confusing bugs. Avoid doing deep equality
          checks inside arePropsEqual unless you are 100% sure that the data
          structure you’re working with has a known limited depth. Deep equality
          checks can become incredibly slow and can freeze your app for many
          seconds if someone changes the data structure later.
        </p>
      </InfoBlock>
      <SkippingRecalcualtaionWithMemo />
    </div>
  );
};

export default UseMemoTopic;

import BulletList from "../../../util/BulletList";

const HigherOrderExamples = () => {
  const examples = ["Array.map", "Array.filter", "Array.reduce", "Array.find"];

  return (
    <div>
      <div className="sub-title">Examples</div>
      <BulletList title="Higher orde function examples" items={examples} />
      <p className="description">
        What we implemeted as examples i.e <code>calculate</code> function is
        similar to map.
      </p>
      <p className="description">
        We can writer our own calculate function as well
      </p>
    </div>
  );
};

export default HigherOrderExamples;

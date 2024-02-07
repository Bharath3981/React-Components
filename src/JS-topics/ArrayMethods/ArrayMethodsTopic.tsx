import ArrayMapTopic from "./ArrayMapTopic/ArrayMapTopic";
import ArrayFilterTopic from "./ArrayFilterTopic/ArrayFilterTopic";
import ArrayReduceTopic from "./ArrayReduceTopic/ArrayReduceTopic";

const ArrayMethodsTopic = () => {
  return (
    <div className="pb-5">
      <div className="main-title pb-5">Array Methods</div>
      <a className="link block" href="#arrayMapTopic">
        Array.prototype.map()
      </a>
      <a className="link block" href="#arrayFilterTopic">
        Array.prototype.filter()
      </a>
      <a className="link block">Array.prototype.reduce()</a>
      <ArrayMapTopic />
      <ArrayFilterTopic />
      <ArrayReduceTopic />
    </div>
  );
};

export default ArrayMethodsTopic;

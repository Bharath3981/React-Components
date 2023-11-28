import React from "react";
import CodeSnippet from "../../../util/CodeSnippet";
import InfoBlock from "../../../util/InfoBlock";

const AvoidRecreatingRefContent = () => {
  return (
    <div className="pb-5">
      <h1 className="sub-title">Avoiding recreating the ref contents</h1>
      <p className="description">
        React saves the initial ref value once and ignores it on the next
        renders.
      </p>
      <CodeSnippet>
        {`function Video() {
  const playerRef = useRef(new VideoPlayer());
}`}
      </CodeSnippet>
      <p className="description">
        Although the result of new VideoPlayer() is only used for the initial
        render, you’re still calling this function on every render. This can be
        wasteful if it’s creating expensive objects. <br /> To solve it, you may
        initialize the ref like this instead:
      </p>
      <CodeSnippet>
        {`function Video() {
  const playerRef = useRef(null);
  if (playerRef.current === null) {
    playerRef.current = new VideoPlayer();
  }
}`}
      </CodeSnippet>
      <InfoBlock infoType="warning">
        <p className="description">Shouldn't use ref to custome component.</p>
      </InfoBlock>
    </div>
  );
};

export default AvoidRecreatingRefContent;

const ChoosingTheStateStructure = () => {
  return (
    <div className="pb-5">
      <h1 className="sub-title">Principles for structuring state:</h1>
      <p>
        <b>Group related state</b> If you always update two or more state
        variables at the same time, consider merging them into a single state
        variable.{" "}
        <a
          className="link"
          target="_blank"
          href="https://react.dev/learn/choosing-the-state-structure#group-related-state"
        >
          Group related state
        </a>
      </p>

      <p>
        <b>Avoid contradictions</b> in state. When the state is structured in a
        way that several pieces of state may contradict and “disagree” with each
        other, you leave room for mistakes. Try to avoid this.{" "}
        <a
          className="link"
          target="_blank"
          href="https://react.dev/learn/choosing-the-state-structure#avoid-contradictions-in-state"
        >
          Avoid contradictions
        </a>
      </p>

      <p>
        <b>Avoid redundant state</b> If you can calculate some information from
        the component’s props or its existing state variables during rendering,
        you should not put that information into that component’s state.{" "}
        <a
          className="link"
          target="_blank"
          href="https://react.dev/learn/choosing-the-state-structure#avoid-redundant-state"
        >
          Avoid redundant in state
        </a>
      </p>

      <p>
        <b>Avoid duplication in state.</b> When the same data is duplicated
        between multiple state variables, or within nested objects, it is
        difficult to keep them in sync. Reduce duplication when you can.{" "}
        <a
          className="link"
          target="_blank"
          href="https://react.dev/learn/choosing-the-state-structure#avoid-duplication-in-state"
        >
          Avoid duplicate in state
        </a>
      </p>

      <p>
        <b>Avoid deeply nested state.</b> Deeply hierarchical state is not very
        convenient to update. When possible, prefer to structure state in a flat
        way.{" "}
        <a
          className="link"
          target="_blank"
          href="https://react.dev/learn/choosing-the-state-structure#avoid-deeply-nested-state"
        >
          Avoid deeply nested state
        </a>
      </p>
    </div>
  );
};

export default ChoosingTheStateStructure;

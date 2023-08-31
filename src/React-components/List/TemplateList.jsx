import React from "react";
import FilteredList from "./FilteredList";

const TemplateList = () => {
  return (
    <div className="app">
      <FilteredList title="Section 1">
        <p>This is the content of section 1.</p>
      </FilteredList>
      <FilteredList title="Section 2">
        <p>This is the content of section 2.</p>
      </FilteredList>
    </div>
  );
};

export default TemplateList;

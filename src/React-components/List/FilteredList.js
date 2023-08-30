import React, { useState } from "react";

const FilteredList = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapsible">
      <div className="collapsible-header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <span>{isCollapsed ? "+" : "-"}</span>
      </div>
      {!isCollapsed && <div className="collapsible-content">{children}</div>}
    </div>
  );
};

export default FilteredList;

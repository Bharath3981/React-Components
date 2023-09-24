import { useEffect, useContext } from "react";
import { componentPagesType, tableComponentPages } from "../../data/Routes";
import { Component } from "../Components";
import ComponentPagesContext from "../../context/ComponentPagesContext";

const TableContent = () => {
  const data: any = useContext<componentPagesType>(ComponentPagesContext);
  const setComponentPages = data[1];
  useEffect(() => {
    setComponentPages(tableComponentPages);
  }, []);

  return (
    <>
      <Component pages={tableComponentPages} />
    </>
  );
};

export default TableContent;

import { useEffect, useContext } from "react";
import { componentPagesType, listComponentPages } from "../../data/Routes";
import { Component } from "../Components";
import ComponentPagesContext from "../../context/ComponentPagesContext";

const ListContent = () => {
  const data: any = useContext<componentPagesType>(ComponentPagesContext);
  const setComponentPages = data[1];
  useEffect(() => {
    setComponentPages(listComponentPages);
  }, []);
  return (
    <>
      <Component pages={listComponentPages} />
    </>
  );
};

export default ListContent;

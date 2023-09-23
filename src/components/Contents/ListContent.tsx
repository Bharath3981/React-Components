import { listComponentPages } from "../../data/Routes";
import { Component } from "../Components";

const ListContent = () => {
  return (
    <>
      <Component pages={listComponentPages} />
    </>
  );
};

export default ListContent;

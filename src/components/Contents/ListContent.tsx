import { listComponentPages } from "../../data/Routes";
import { Component } from "../Components";

const ListContent = () => {
  console.log("Content: ", listComponentPages);
  return (
    <>
      <Component pages={listComponentPages} />
    </>
  );
};

export default ListContent;

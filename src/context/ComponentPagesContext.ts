import { createContext } from "react";
import { componentPagesType } from "../data/Routes";

interface MyContextValue {
  componentPages: componentPagesType;
  setComponentPages: (newData: componentPagesType) => void;
}
const ComponentPagesContext: any = createContext<MyContextValue | undefined>(
  undefined
);

export default ComponentPagesContext;

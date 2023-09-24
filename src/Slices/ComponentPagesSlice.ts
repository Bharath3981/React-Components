import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { componentPagesType, listComponentPages } from "../data/Routes";

const initialState: any = listComponentPages;
const ComponentPagesSlice = createSlice({
  name: "ComponentPagesSlice",
  initialState,
  reducers: {
    updateComponentPages: (state, action: PayloadAction<any>) => {
      state = action.payload;
    },
  },
});

export const { updateComponentPages } = ComponentPagesSlice.actions;
export default ComponentPagesSlice.reducer;

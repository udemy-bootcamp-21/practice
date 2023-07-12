import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const lineSlice = createSlice({
  name: "lines",
  initialState,
  reducers: {
    addLine: (state, action) => {
      const newLine = action.payload;
      return [...state, newLine];
    },
    removeLine: (state) => {
      return [...state].slice(0, -1);
    },
  },
});

export const { addLine, removeLine } = lineSlice.actions;
export default lineSlice.reducer;

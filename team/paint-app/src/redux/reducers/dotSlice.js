import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const dotSlice = createSlice({
  name: "dots",
  initialState,
  reducers: {
    addDot: (state, action) => {
      const newDot = action.payload;
      return [...state, newDot];
    },
    removeDot: (state) => {
      return [...state].slice(0, -1);
    },
  },
});

export const { addDot, removeDot } = dotSlice.actions;

export default dotSlice.reducer;

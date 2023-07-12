import { configureStore } from "@reduxjs/toolkit";
import { dotSlice, lineSlice } from "../reducers";

export const store = configureStore({
  reducer: {
    dot: dotSlice,
    line: lineSlice,
  },
});

export default store;

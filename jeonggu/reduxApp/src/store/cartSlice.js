import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      console.log(action);
      const newTodo = {
        id: state.carts.length + 1,
        productName: action.payload.productName,
        productPrice: action.payload.productPrice,
      };
      state.carts.push(newTodo);
    },
    removeCart: (state, action) => {
      state.carts = state.carts.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addCart, removeCart, toggleTodo } = cartSlice.actions;

export default cartSlice.reducer;

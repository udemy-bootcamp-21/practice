import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";
import todoReducer from "./todoSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    todo: todoReducer,
    cart: cartReducer,
  },
});

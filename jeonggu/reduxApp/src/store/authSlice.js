import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  notiTxt: "로그인되지 않았습니다.",
  btnTxt: "로그인",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleLogin: (state, action) => {
      state.isLogin = !action.payload;
      if (state.isLogin) {
        state.notiTxt = "로그인 되었습니다.";
        state.btnTxt = "로그아웃";
      } else {
        state.notiTxt = "로그인되지 않았습니다.";
        state.btnTxt = "로그인";
      }
    },
  },
});

export const { handleLogin } = authSlice.actions;

export default authSlice.reducer;

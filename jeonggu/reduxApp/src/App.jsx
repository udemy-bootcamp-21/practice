import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/counterSlice";
import { handleLogin } from "./store/authSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const notiTxt = useSelector((state) => state.auth.notiTxt);
  const btnTxt = useSelector((state) => state.auth.btnTxt);
  const dispatch = useDispatch();

  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(decrement())}>감소</button>
      <div>
        <p>{notiTxt}</p>
        <button onClick={() => dispatch(handleLogin(isLogin))}>{btnTxt}</button>
      </div>
    </>
  );
}

export default App;

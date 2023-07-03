import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/counterSlice";
import { handleLogin } from "./store/authSlice";
import { useState } from "react";
import { addTodo, removeTodo, toggleTodo } from "./store/todoSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const notiTxt = useSelector((state) => state.auth.notiTxt);
  const btnTxt = useSelector((state) => state.auth.btnTxt);
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const handleAdd = () => {
    dispatch(addTodo(input));
    setInput("");
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          width: "300px",
          minHeightheight: "300px",
          backgroundColor: "red",
          marginBottom: "5rem",
        }}
      >
        <div>{count}</div>
        <button onClick={() => dispatch(increment())}>증가</button>
        <button onClick={() => dispatch(decrement())}>감소</button>
      </div>
      <div
        style={{
          width: "300px",
          minHeightheight: "300px",
          backgroundColor: "orange",
          marginBottom: "5rem",
        }}
      >
        <p>{notiTxt}</p>
        <button onClick={() => dispatch(handleLogin(isLogin))}>{btnTxt}</button>
      </div>
      <div
        style={{
          color: "green",
          width: "300px",
          minHeightheight: "300px",
          backgroundColor: "yellow",
          marginBottom: "5rem",
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add Todo</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => handleToggle(todo.id)}
              />
              <span
                style={{ textDecoration: todo.done ? "line-through" : "none" }}
              >
                {todo.text}
              </span>
              <button onClick={() => handleRemove(todo.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

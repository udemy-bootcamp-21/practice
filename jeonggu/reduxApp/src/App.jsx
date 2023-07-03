import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/counterSlice";
import { handleLogin } from "./store/authSlice";
import { useState } from "react";
import { addTodo, removeTodo, toggleTodo } from "./store/todoSlice";
import { addCart, removeCart } from "./store/cartSlice";

function App() {
  const count = useSelector((state) => state.counter.value);

  const isLogin = useSelector((state) => state.auth.isLogin);
  const notiTxt = useSelector((state) => state.auth.notiTxt);
  const btnTxt = useSelector((state) => state.auth.btnTxt);

  const [todoInput, setTodoInput] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const handleAdd = () => {
    if (!todoInput) {
      alert("할 일을 입력해주세요.");
      return;
    }

    dispatch(addTodo(todoInput));
    setTodoInput("");
  };
  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };
  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const [cartTxtInput, setCartTxtInput] = useState("");
  const [cartPriceInput, setPriceTxtInput] = useState("");
  const carts = useSelector((state) => state.cart.carts);
  const handleAddCart = () => {
    if (!cartTxtInput || !cartPriceInput) {
      alert("상품명과 상품가격을 입력해주세요.");
      return;
    }
    dispatch(
      addCart({ productName: cartTxtInput, productPrice: cartPriceInput })
    );
    setCartTxtInput("");
    setPriceTxtInput("");
  };
  const handleRemoveCart = (id) => {
    dispatch(removeCart(id));
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
          value={todoInput}
          placeholder="할 일을 입력해주세요."
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button onClick={handleAdd}>일정 추가</button>
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

      <div
        style={{
          width: "300px",
          minHeightheight: "300px",
          backgroundColor: "green",
          marginBottom: "5rem",
        }}
      >
        <input
          type="text"
          value={cartTxtInput}
          placeholder="상품명을 입력해주세요."
          onChange={(e) => setCartTxtInput(e.target.value)}
        />
        <input
          type="number"
          value={cartPriceInput}
          placeholder="상품 가격을 입력해주세요."
          onChange={(e) => setPriceTxtInput(e.target.value)}
        />
        <button onClick={handleAddCart}>상품 추가</button>
        <ul>
          {carts.map((cart) => (
            <li key={cart.id}>
              <span>{cart.productName}</span> -{" "}
              <span>{cart.productPrice} 원</span>
              <button onClick={() => handleRemoveCart(cart.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

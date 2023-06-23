import React, { useState } from "react";
import './app.css'

function App() {

  let [login,setLogin] = useState({
    text: "",
    password: "" 
  })


  const textChange = (e) => {
    setLogin({
      text: e.target.value,
      password: login.password
    })
  }

  const passwordChange = (e) => {
    setLogin({
      text: login.text,
      password: e.target.value
    })
  }

  const loginSubmit = (e) => {
    console.log(e.target)
    if(login.text === "admin" && login.password === "password"){
      alert("잘햇어용")
    }else{
      alert("머함?")
    }
  }
  
  return (
    <div className="app">
      <form action="" className="app__form" onSubmit={loginSubmit}>
        <input type="text" onChange={textChange}/>
        <input type="password" autoComplete="false" onChange={passwordChange}/>
        <input type="submit" value={"button"}/>
      </form>
    </div>
  )
}
export default App;

import React, { useState } from 'react'
import './second.css'

const Second = () => {

  let [todo,setTodo] = useState([])
  let [todotext,setTodotext] = useState()
  let v;
  const todoChange = (e) => {
    setTodotext(e.target.value)
    // if(e.target.value != null){
    //   v = e.target.value
    // }else{
    //   v = todo[todo.length-1]
    // }
    console.log(v)
  }

  const todoButton = () => {
    let copy = [...todo]
    setTodo([...copy,todotext])
    // setTodo([...copy,v])
  }


  return (
    <div className='second'>
      <input type="text" onChange={todoChange}/>
      <input type="button" value={"추가하기"} onClick={todoButton}/>
      {todo.map((ele,index) => (
        ele ? <p className='todolist' key={index}>{ele}</p> : null
        )
      )}
    </div>
  )
}

export default Second
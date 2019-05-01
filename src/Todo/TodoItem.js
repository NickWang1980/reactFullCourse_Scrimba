import React from "react"

function TodoItem(props){
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.item.completed}/>
      <p className={props.item.completed && "strike-through"}>{props.item.text}</p>
      <hr/>
    </div>
  )
}

export default TodoItem
import React from "react";
import "./Todo.css";


const Todo = ({ task, id, completed, toggleComplete, deleteTask }) => {

  const handleDeleteTask = (e) => {
    e.preventDefault();
    // deleteTask(e.target.parentElement.id);
    deleteTask(id);
  }

  const markComplete = (e) => {
    e.preventDefault();
    toggleComplete(id);
  }

  return (<div id={id} className={completed ? "Todo-complete" : ""}>
    {task}
    <button onClick={handleDeleteTask}>X</button>
    <button onClick={markComplete}>Mark Complete</button>
  </div>);
}

export default Todo;
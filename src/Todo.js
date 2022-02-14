import React from "react";
import "./Todo.css";


const Todo = ({ task, id, completed, toggleComplete, removeTodo }) => {

  const handleDeleteTodo = (e) => {
    e.preventDefault();
    removeTodo(id);
  }

  const handleToggle = (e) => {
    e.preventDefault();
    toggleComplete(id);
  }

  return (
    <div className="Todo" id={id} >
      <div className="Todo-task-container">
        <span className={completed ? "Todo-task Todo-complete" : "Todo-task"}><i className="fas fa-angle-double-right"></i> {task}</span>
      </div>
      <div className="Todo-buttons">
        <button className="Todo-delete" onClick={handleDeleteTodo}>X</button>
        <button className="Todo-markComplete" onClick={handleToggle}>Mark Complete</button>
      </div>
    </div>
  );
}

export default Todo;
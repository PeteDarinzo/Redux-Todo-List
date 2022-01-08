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

  return (
    <div className="Todo" id={id} >

      <div className="Todo-task-container">
        <span className={completed ? "Todo-task Todo-complete" : "Todo-task"}><i class="fas fa-angle-double-right"></i> {task}</span>
      </div>

      <div className="Todo-buttons">

        <button className="Todo-delete" onClick={handleDeleteTask}>X</button>

        <button className="Todo-markComplete" onClick={markComplete}>Mark Complete</button>

      </div>

    </div>
  );
}

export default Todo;
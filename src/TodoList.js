import React, { useState } from "react";
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";
import "./ToDoList.css"



const TodoList = () => {

  const [tasks, setTasks] = useState([]);

  // set tasks from local storage
  window.addEventListener('DOMContentLoaded', (e) => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    setTasks(() => JSON.parse(localStorage.getItem("tasks")));
  });

  const addTask = (newTask) => {
    setTasks((tasks) => {
      const newTasks = [...tasks, { ...newTask, id: uuid() }];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
  }

  const toggleComplete = (id) => {
    let task = {};
    for (let t of tasks) {
      if (t.id === id) {
        task = t;
      }
    }
    deleteTask(id);
    task.completed === false ? task.completed = true : task.completed = false;
    setTasks((tasks) => {
      const newTasks = [...tasks, { ...task }];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks
    });
  }

  const deleteTask = (id) => {
    setTasks((tasks) => {
      const newTasks = tasks.filter(task => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
  }

  return (
    <div>
      <h2>TODO List</h2>
      <NewTodoForm addTask={addTask} />
      <div className="ToDoList">
        {tasks.map(({ task, completed, id }) => <Todo task={task} completed={completed} toggleComplete={toggleComplete} deleteTask={deleteTask} key={id} id={id} />)}
      </div>
    </div>
  );
}

export default TodoList;
import React, { useState, useEffect } from "react";
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";
import "./ToDoList.css"


const TodoList = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    setTasks(() => JSON.parse(localStorage.getItem("tasks")));
  }, []);


  const addTask = (newTask) => {
    const newTasks = [...tasks, { ...newTask, id: uuid() }]
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(tasks => newTasks);
  }

  const toggleComplete = (id) => {
    let newTasks = [...tasks];
    let taskIndex = newTasks.findIndex(task => task.id === id);
    newTasks[taskIndex].completed === false ? newTasks[taskIndex].completed = true : newTasks[taskIndex].completed = false;
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(tasks => newTasks);
  }

  const deleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(tasks => newTasks);
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
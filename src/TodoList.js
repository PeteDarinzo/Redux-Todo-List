import React, { useEffect } from "react";
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import "./ToDoList.css"


const TodoList = () => {

  const todos = useSelector(store => store.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      const storedTodos = JSON.parse(localStorage.getItem("todos"));
      for (let t of storedTodos) {
        dispatch({ type: "ADD", payload: t })
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTask) => {
    const id = uuid();
    dispatch({ type: "ADD", payload: { ...newTask, id } });
    localStorage.setItem("tasks", JSON.stringify(todos));
  }

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  }

  const toggleComplete = (id) => {
    dispatch({ type: "TOGGLE", payload: id })
  }

  return (
    <div>
      <h2>TODO List</h2>
      <NewTodoForm addTodo={addTodo} />
      <div className="ToDoList">
        {todos.map(({ task, completed, id }) => <Todo task={task} completed={completed} toggleComplete={toggleComplete} removeTodo={removeTodo} key={id} id={id} />)}
      </div>
    </div>
  );
}

export default TodoList;
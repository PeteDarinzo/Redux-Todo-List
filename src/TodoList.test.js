import React from "react";
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';



it("renders a todo list without crashing", () => {
  <TodoList />
});

it("matches the todo snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add a new task", () => {
  const { queryByText, getByLabelText } = render(<TodoList />);

  const taskInput = getByLabelText("New Task");
  const btn = queryByText("Submit")

  fireEvent.change(taskInput, { target: { value: "walk dog" } });
  fireEvent.click(btn);

  const newTask = queryByText("walk dog");
  
  expect(newTask).toBeInTheDocument();
});

it("should delete a task", () => {
  const { queryByText, getByLabelText } = render(<TodoList />);

  const taskInput = getByLabelText("New Task");
  const addBtn = queryByText("Submit")

  fireEvent.change(taskInput, { target: { value: "feed cat" } });
  fireEvent.click(addBtn);

  const newTask = queryByText("feed cat");

  expect(newTask).toBeInTheDocument();

  const deleteBtn = queryByText("X");

  fireEvent.click(deleteBtn);

  expect(newTask).not.toBeInTheDocument();
});

it("should toggle a task's completion", () => {
  const { queryByText, getByLabelText } = render(<TodoList />);

  const taskInput = getByLabelText("New Task");
  const addBtn = queryByText("Submit")

  fireEvent.change(taskInput, { target: { value: "feed turtle" } });
  fireEvent.click(addBtn);

  const newTask = queryByText("feed turtle");

  expect(newTask).toBeInTheDocument();

  const completeBtn = queryByText("Mark Complete");

  expect(newTask).toHaveClass("Todo-task");
  expect(newTask).not.toHaveClass("Todo-complete");
  
  fireEvent.click(completeBtn);

  expect(newTask).toHaveClass("Todo-task Todo-complete");
});
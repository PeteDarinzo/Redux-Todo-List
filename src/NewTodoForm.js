import React, { useState } from "react";


const NewTodoForm = ({ addTask }) => {
  const initialState = {
    task: "",
    completed: false
  }

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.task) {
      addTask({ task: formData.task, completed: false });
      setFormData(initialState);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">New Task</label>
      <input
        id="task"
        type="text"
        name="task"
        value={formData.task}
        onChange={handleChange}
        placeholder="Enter task"
      />
      <button>Submit New Task</button>
    </form>
  );
}

export default NewTodoForm;
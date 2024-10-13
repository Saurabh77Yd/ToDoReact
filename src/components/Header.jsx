import { useState } from "react";
import "./Header.css";

const Header = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  // Handle task input
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Add task when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <header>
      <h1 className="heading">To-Do List</h1>
      <form onSubmit={handleSubmit} className="form-box">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add a new task"
          className="input-box"
        />
        <button type="submit" className="submitbtn">
          Add Task
        </button>
      </form>
    </header>
  );
};

export default Header;

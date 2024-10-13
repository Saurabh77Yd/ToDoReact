import "./ToDo.css";
const ToDoItem = ({ task, deleteTask, toggleComplete }) => {
  return (
    <li className="one-item">
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
        className="list-text"
      >
        {task.text}
      </span>
      <button onClick={() => toggleComplete(task.id)} className="com-btn">
        {task.completed ? "Not Complete" : "Complete"}
      </button>
      <button onClick={() => deleteTask(task.id)} className="del-btn">
        Delete
      </button>
    </li>
  );
};

export default ToDoItem;

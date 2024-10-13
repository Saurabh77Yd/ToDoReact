import "./ToDo.css";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <ul className="list-item">
      {tasks.length === 0 && <li className="no-task">No tasks yet!</li>}
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};

export default ToDoList;

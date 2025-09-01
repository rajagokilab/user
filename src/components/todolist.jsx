import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");       // to store input value
  const [tasks, setTasks] = useState([]);     // to store list of tasks

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === "") return; // ignore empty tasks
    setTasks([...tasks, task]);     // add task to list
    setTask("");                     // clear input
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

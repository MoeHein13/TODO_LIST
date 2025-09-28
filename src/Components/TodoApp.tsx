import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

type TaskType = {
  text: string;
  complete: boolean;
};

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [createdTask, setCreatedTask] = useState<TaskType[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const trimmed = task.trim();
    if (trimmed) {
      setCreatedTask((prev) => [...prev, { text: task, complete: false }]);
      setTask("");
    }
  };

  const handleDelete = (index: number) => {
    setCreatedTask((prev) => prev.filter((_, ind: number) => index !== ind));
  };

  const handleComplete = (index: number) => {
    setCreatedTask((prev) =>
      prev.map((task, ind) =>
        index === ind ? { ...task, complete: !task.complete } : task
      )
    );
  };

  return (
    <div>
      <h1>ToDo</h1>
      <form onSubmit={() => handleSubmit}>
        <input
          type="text"
          placeholder="Create the task"
          value={task}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {createdTask.map((task, index) => {
          return (
            <li key={index}>
              {task.text}{" "}
              <button onClick={() => handleDelete(index)}>Delete</button>{" "}
              <button onClick={() => handleComplete(index)}>Complete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoApp;

const fetchData = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const [error, setError] = useState<string>("");

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const user = await response.json();
      const data = user.data;
      setUser(data);
    } catch (err) {
      return err instanceof Error ? setError(err.message) : "Error Fetching ";
    } finally {
      setLoading(true);
    }
  };
  useEffect(() => fetchUserData(), []);

  return { loading, user, error };
};

import { useState, type ChangeEvent, type FormEvent } from "react";
import SearchBar from "./SearchBar";

const HomePage = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTasks((prev) => [...prev, e.target.value]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-dvh flex items-center justify-center">
      <div className="flex flex-col w-auto gap-2">
        <h1 className="font-semibold text-2xl text-gray-200 mb-3">
          Task Manager
        </h1>

        <SearchBar
          tasks={tasks}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default HomePage;

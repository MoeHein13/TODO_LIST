import { useState, type ChangeEvent, type FormEvent } from "react";
import SearchBar from "./SearchBar";
import { OctagonX, BookmarkCheck } from "lucide-react";

type TaskType = {
  task: string;
  complete: boolean;
};

const HomePage = () => {
  const [tasks, setTasks] = useState<string>("");
  const [selectedTask, setSelectedTask] = useState<TaskType[]>([]);

  const handleDelete = (ind: number) => {
    setSelectedTask((prev: TaskType[]) =>
      prev.filter((_, index) => index !== ind)
    );
  };

  const renderTask = selectedTask.map((task, index) => {
    return (
      <div
        key={index}
        className={`w-auto flex justify-between p-3  border-b-gray-200 text-white border-b-1 ${
          task.complete ? "line-through" : ""
        }`}
      >
        <BookmarkCheck
          color="#f2f2f2"
          onClick={() => handleComplete(index)}
          className="cursor-pointer"
        />
        <div className="w-[200px]">{task.task}</div>

        <OctagonX
          color="#f2f2f2"
          className="cursor-pointer"
          onClick={() => handleDelete(index)}
        />
      </div>
    );
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTasks(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = tasks.trim();
    if (trimmed) {
      setTasks("");
      setSelectedTask((prev) => [...prev, { task: trimmed, complete: false }]);
    }
  };

  const handleComplete = (ind: number) => {
    setSelectedTask((prev) =>
      prev.map((task, index) =>
        index === ind ? { ...task, complete: !task.complete } : task
      )
    );
  };

  return (
    <div className="min-h-dvh flex items-center justify-center">
      <div className="flex flex-col gap-2 w-[600px]">
        <h1 className="font-semibold text-2xl text-gray-200 mb-3 ">
          Task Manager
        </h1>

        <SearchBar
          tasks={tasks}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        <div className="bg-blue-800  border-gray-600 rounded">{renderTask}</div>
      </div>
    </div>
  );
};

export default HomePage;

import type { ChangeEvent, FormEvent } from "react";
import { CircleCheckBig } from "lucide-react";
type barType = {
  tasks: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const SearchBar = ({ tasks, handleChange, handleSubmit }: barType) => {
  return (
    <div className="bg-blue-800 p-3 border-gray-600 rounded  ">
      <form onSubmit={handleSubmit} className="w-auto flex">
        <input
          type="text"
          placeholder="Create a task"
          value={tasks}
          onChange={handleChange}
          className="outline-0 text-white  w-full "
        />
        <button type="submit">
          <CircleCheckBig color="#f2f2f2" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

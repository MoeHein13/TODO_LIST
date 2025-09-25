import type { ChangeEvent, FormEvent } from "react";

type barType = {
  tasks: string[];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const SearchBar = ({ tasks, handleChange, handleSubmit }: barType) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Create a task"
          value={tasks}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default SearchBar;

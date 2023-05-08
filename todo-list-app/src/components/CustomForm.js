import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleFormSubmit = (e) => 
  {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now(),
    });
    setTask('');
  };

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onChange={handleInputChange}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        <label htmlFor="task" className="label">
          Enter Task
        </label>
      </div>
      <button className="btn" aria-label="Add Task" type="submit">
        <PlusIcon />
      </button>
    </form>
  );
};

export default CustomForm;

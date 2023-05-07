import React from 'react';
import TaskItem from './TaskItem';
import styles from './TaskList.module.css';

const TaskList = ({ tasks = [], deleteTask, toggleTask, enterEditMode }) => {
  const sortedTasks = tasks.sort((a, b) => b.id - a.id);

  return (
    <ul className={styles.tasks}>
      {sortedTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      ))}
    </ul>
  );
};

export default TaskList;

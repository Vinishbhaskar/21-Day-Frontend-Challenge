import TaskItem from './TaskItem';

const TaskList = ({ tasks = [], deleteTask, toggleTask, enterEditMode }) => 
{
  const sortedTasks = tasks.sort((a, b) => b.id - a.id);

  return (
    <ul className="tasksList">
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

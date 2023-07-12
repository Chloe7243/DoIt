import { PiCaretLeftLight } from "react-icons/pi";
import "./CollectionTasks.css";
import TodoItem from "../ToDoItem/ToDoItem";
import TaskForm from "../TaskForm/TaskForm";

const CollectionTasks = ({ collectionItem }) => {
  const renderNewTask = () => {
    console.log(collectionItem.todo);
  };

  const renderPreviousState = (event) => {
    
  }

  return (
    <div className="todo-tasks">
      <div className="todo-tasks__header">
        <PiCaretLeftLight className="back-to-previous-page" onClick={renderPreviousState} />
        <h2>{collectionItem.title}</h2>
      </div>
      <TaskForm color={collectionItem.color} onAddNewTask={renderNewTask} />
      <ul className="collection-details__items todo-tasks__list">
        {collectionItem.todo.map((task, i) => (
          <TodoItem
            task={task}
            key={task.title[0] + i}
            color={collectionItem.color}
            className="todo-tasks__list__item"
          />
        ))}
      </ul>
    </div>
  );
};

export default CollectionTasks;

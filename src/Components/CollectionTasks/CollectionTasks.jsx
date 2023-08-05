import { PiCaretLeftLight } from "react-icons/pi";
import "./CollectionTasks.css";
import TodoItem from "../TodoItem/TodoItem";
import TaskForm from "../TaskForm/TaskForm";

const CollectionTasks = ({ collectionItem, renderPreviousPage }) => {
  const renderNewTask = () => {
    console.log(collectionItem.todo);
  };

  return (
    <div className="todo-tasks">
      <div className="todo-tasks__header">
        <PiCaretLeftLight
          className="back-to-previous-page"
          onClick={renderPreviousPage}
        />
        <h2>{collectionItem.title}</h2>
      </div>
      <TaskForm
        color={collectionItem.color}
        onAddNewTask={renderNewTask}
        key={collectionItem.id}
      />
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

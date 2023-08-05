import { PiCaretLeftLight } from "react-icons/pi";
import "./CollectionTasks.css";
import TodoItem from "../TodoItem/TodoItem";
import TaskForm from "../TaskForm/TaskForm";
import { useEffect, useState } from "react";

const CollectionTasks = ({ collectionItem, renderPreviousPage }) => {
  const [collectionTodo, setCollectionTodo] = useState(collectionItem.todo);
  const [incompletedTasks, setIncompletedTasks] = useState(
    collectionTodo.filter((item) => !item.isChecked)
  );
  const [completedTasks, setCompletedTasks] = useState(
    collectionTodo.filter((item) => item.isChecked)
  );

  useEffect(() => {
    setIncompletedTasks(collectionTodo.filter((item) => !item.isChecked));
    setCompletedTasks(collectionTodo.filter((item) => item.isChecked));
  }, [collectionTodo]);

  const renderPage = () => {
    setIncompletedTasks(collectionTodo.filter((item) => !item.isChecked));
    setCompletedTasks(collectionTodo.filter((item) => item.isChecked));
  };

  const renderNewTask = (new_todo) => {
    setCollectionTodo((prevTodos) => {
      return [new_todo, ...prevTodos];
    });
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
      <div className="taskContainer">
        <TaskForm
          color={collectionItem.color}
          onAddNewTask={renderNewTask}
          key={collectionItem.id}
        />
        <div className="all__tasks" key={collectionItem.id + 1}>
          <ul
            className="collection-details__items todo-tasks__list"
            key={collectionItem + 2}
          >
            <h3>Incompleted Tasks - {incompletedTasks.length}</h3>
            {incompletedTasks.map((task, i) => (
              <TodoItem
                task={task}
                key={task.title[0] + i}
                color={collectionItem.color}
                className="todo-tasks__list__item"
                renderPage={renderPage}
              />
            ))}
          </ul>

          <ul
            className="collection-details__items todo-tasks__list"
            key={collectionItem + 3}
          >
            <h3>Completed Tasks - {completedTasks.length}</h3>
            {completedTasks.map((task, i) => (
              <TodoItem
                task={task}
                key={task.title[0] + i + 1}
                color={collectionItem.color}
                className="todo-tasks__list__item"
                renderPage={renderPage}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CollectionTasks;

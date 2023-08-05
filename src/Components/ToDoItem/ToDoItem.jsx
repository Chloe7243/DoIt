import "./TodoItem.css";
import DueDate from "../DueDate/DueDate";
import { useEffect, useState } from "react";

const TodoItem = ({ task, color, className, renderPage }) => {
  const [isChecked, setIsChecked] = useState(task.isChecked);
  const toggleCheck = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  };
  task.isChecked = isChecked;

  useEffect(() => {
    renderPage();
  }, [isChecked]);

  return (
    <li className={"task " + className}>
      <input
        onClick={toggleCheck}
        type="checkbox"
        name=""
        id=""
        className={"regCheckbox" + (task.isChecked ? " checked" : "")}
        style={{ borderColor: color, backgroundColor: task.isChecked && color }}
      />
      <span>
  
      <p className={"title" + (task.isChecked && " checked")}>{task.title}</p>
      {!task.isChecked && <DueDate due_date={task.due_date} due_time={task.due_time} key={task.id} />}
      </span>
    </li>
  );
};

export default TodoItem;

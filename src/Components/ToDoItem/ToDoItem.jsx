import "./ToDoItem.css";
import DueDate from "../DueDate/DueDate";
import { useState } from "react";

const ToDoItem = ({ task, color, className }) => {
  const [isChecked, setIsChecked] = useState(task.isChecked);
  const toggleCheck = () =>
    isChecked ? setIsChecked(false) : setIsChecked(true);
  task.isChecked = isChecked;
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
      <p className={task.isChecked ? "checked" : ""}>{task.title}</p>
      <p>{<DueDate due_date={task.due_date} />}</p>
    </li>
  );
};

export default ToDoItem;

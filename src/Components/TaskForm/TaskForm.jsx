import { FaPlus } from "react-icons/fa";
import "./TaskForm.css";
import { useState } from "react";

const TaskForm = ({ color, onAddNewTask }) => {
  const [formVisibility, setFormVisibility] = useState(false);
  const setContentDisplay = () => {
    formVisibility ? setFormVisibility(false) : setFormVisibility(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onAddNewTask();
    };
    
    const currentDate = new Date()
    console.log(currentDate)

    return (
    <div
      className="add-task__container"
      style={{ padding: formVisibility ? "1rem" : "" }}
    >
      {!formVisibility ? (
        <div className="add-task" onClick={setContentDisplay}>
          <FaPlus
            className="add-task__icon"
            style={{ backgroundColor: color }}
          />
          <p>Add a Task</p>
        </div>
      ) : (
        <form className="add-task__form" onSubmit={submitHandler}>
          <input
            type="text"
            name=""
            id=""
            className="add-task"
            placeholder="Add a Task"
          />
          <div className="due_date_time">
            <input
              type="date"
              name=""
              id=""
              min={currentDate}
              max="2025-01-01"
            />
            <input type="time" name="" id="" />
          </div>
          <div className="add-task__form__actions">
            <button onClick={setContentDisplay} style={{ background: color }}>
              Cancel
            </button>
            <button type="submit" style={{ background: color }}>
              Add Task
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TaskForm;

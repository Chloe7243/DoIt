import { FaPlus } from "react-icons/fa";
import "./TaskForm.css";
import { useEffect, useRef, useState } from "react";

const TaskForm = ({ color, onAddNewTask }) => {
  const [formVisibility, setFormVisibility] = useState(false);
  const [validInput, setInputValidity] = useState({
    task: true,
    date: true,
    time: true,
  });

  let taskInput = useRef();
  let dateInput = useRef();
  let timeInput = useRef();

  const setContentDisplay = () => {
    formVisibility ? setFormVisibility(false) : setFormVisibility(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const task = taskInput.current.value;
    const date = dateInput.current.value;
    const time = timeInput.current.value;
    if (task.trim().length === 0) {
      setInputValidity((prevState) => {
        return {
          ...prevState,
          task: false,
        };
      });
      return;
    }
    if (date.length != 0 && time.length === 0) {
      setInputValidity((prevState) => {
        return {
          ...prevState,
          time: false,
        };
      });
      return;
    }
    if (time.length != 0 && date.length === 0) {
      setInputValidity((prevState) => {
        return {
          ...prevState,
          date: false,
        };
      });
      return;
    }

    setInputValidity({
      task: true,
      date: true,
      time: true,
    });

    const new_todo = {
      title: task,
      due_date: date,
      due_time: time,
      isChecked: false,
    };

    onAddNewTask(new_todo);
    taskInput.current.value = "";
    dateInput.current.value = "";
    timeInput.current.value = "";
  };

  const currentDate = new Date();

  const minDate = currentDate
    .toLocaleString("en-UK", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/")
    .reverse()
    .join("-");

  const maxDate = [
    currentDate.getFullYear() + 1,
    "0" + (currentDate.getMonth() + 1),
    "0" + currentDate.getDate(),
  ].join("-");

  return (
    <div
      className="form__container"
      style={{
        padding: !formVisibility ? "0" : "",
        cursor: formVisibility ? "auto" : "",
      }}
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
        <form className="form" onSubmit={submitHandler}>
          <div className="inputbox">
            <input
              type="text"
              name=""
              id=""
              className="add-task"
              placeholder="Add a Task"
              ref={taskInput}
              onChange={() =>
                setInputValidity({
                  task: true,
                  date: true,
                  time: true,
                })
              }
            />
            {!validInput.task && <p className="inputErr">Please add a task</p>}
          </div>
          <div className="form__extras">
            <div className="inputbox">
              <input
                type="date"
                name=""
                id=""
                min={minDate}
                max={maxDate}
                ref={dateInput}
                onChange={() =>
                  setInputValidity((prevState) => {
                    return { ...prevState, date: true };
                  })
                }
              />
              {!validInput.date && (
                <p className="inputErr">Please add a date</p>
              )}
            </div>
            <div className="inputbox">
              <input
                type="time"
                name=""
                id=""
                ref={timeInput}
                onChange={() =>
                  setInputValidity((prevState) => {
                    return { ...prevState, time: true };
                  })
                }
              />
              {!validInput.time && (
                <p className="inputErr">Please include a time</p>
              )}
            </div>
          </div>
          <div className="form__actions">
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

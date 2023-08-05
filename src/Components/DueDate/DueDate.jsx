import styles from "./DueDate.module.css";

const DueDate = ({ due_date, due_time }) => {
  const currentDate = new Date();
  const due = due_date.split("-");
  let reachedDeadline = false;
  let dayToDeadLine = false;

  const checkDeadline = () => {
    const today = [
      currentDate.getFullYear(),
      "0" + (currentDate.getMonth() + 1),
      "0" + currentDate.getDate(),
    ];
    if (today.join("-") >= due_date) reachedDeadline = true;
    else if (
      due[0] == today[0] &&
      due[1] == today[1] &&
      due[2] - today[2] === 1
    )
      dayToDeadLine = true;
  };
  checkDeadline();

  let full_due_date = new Date(due).toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <p
      className={styles.due}
      style={{
        color: reachedDeadline ? "red" : dayToDeadLine ? "yellow" : "green",
      }}
    >
      {full_due_date} <br/>
      { due_time }
    </p>
  );
};

export default DueDate;

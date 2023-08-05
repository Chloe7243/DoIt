import styles from "./DueDate.module.css";

const DueDate = ({ due_date, due_time }) => {
  console.log(due_date);
  return (
    <p className={styles.due}>
      {due_date} {due_time}
    </p>
  );
};

export default DueDate;

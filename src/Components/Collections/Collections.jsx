import { Fragment, useState } from "react";
import { FaPlus, FaCheck } from "react-icons/fa";
import { collectionsList } from "../../utilities";
import styles from "./Collections.module.css";
import CollectionItem from "../CollectionItem/CollectionItem";
import Tab from "../Tab/Tab";

const Collections = () => {
  const [index, setIndex] = useState(2);
  const setIndexValue = (event) => {
    const indexValue = event.target.getAttribute("data-index");
    setIndex(indexValue);
  };

  return (
    <Fragment>
      <p>Collections</p>
      <Tab
        className={index == 2 ? " activeTab" : ""}
        onClick={setIndexValue}
        value="2"
        key={2}
      >
        All Collections
      </Tab>
      <Tab
        className={index == 3 ? " activeTab" : ""}
        onClick={setIndexValue}
        value="3"
        key={3}
      >
        Completed Collections
      </Tab>
      <div className={styles.collections}>
        {collectionsList.map((item) => {
          const numberOfTasks = item.todo.length;
          const numberOfTasksDone = item.todo.filter(
            (todo) => todo.isChecked
          ).length;
          const percentageDone = (numberOfTasksDone / numberOfTasks) * 360;
          console.log(percentageDone);
          return (
            <div className={styles.collection__details}>
              <CollectionItem
                collection={item}
                className={styles.collection__name}
                key={item.id}
              />
              <div className={styles["percentage-done"]}>
                <p>
                  {numberOfTasksDone}/{numberOfTasks} done
                </p>
                {percentageDone === 360 ? (
                  <div className={styles.done} style={{backgroundColor: item.color,}}>
                    <FaCheck />
                  </div>
                ) : (
                  <div
                    className={styles.percentage}
                    style={{
                      background: `conic-gradient(${item.color} ${percentageDone}deg, #2c2d3c 0deg)`,
                    }}
                  ></div>
                )}
              </div>
            </div>
          );
        })}
        <button className={styles["add-collection"]}>
          <FaPlus />
        </button>
      </div>
    </Fragment>
  );
};
export default Collections;

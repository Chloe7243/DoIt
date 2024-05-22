import { useEffect, useRef, useState } from "react";
import { FaPlus, FaCheck } from "react-icons/fa";
import { collectionsList } from "../../utilities";
import styles from "./Collections.module.css";
import CollectionItem from "../CollectionItem/CollectionItem";
import Tab from "../Tab/Tab";
import CollectionForm from "../CollectionForm/CollectionForm";

const Collections = () => {
  const [index, setIndex] = useState(2);
  const [showForm, setDisplayForm] = useState(false);
  const setIndexValue = (event) => {
    const indexValue = event.target.getAttribute("data-index");
    setIndex(indexValue);
  };
  useEffect(() => {}, [collectionsList]);
  const closeForm = () => setDisplayForm(false);

  const displayCollectionForm = () => setDisplayForm(true);

  return (
    <>
      <h4 className={styles["collections-header"]}>Collections</h4>
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
      <div className={styles["collections__container"]}>
        <div className={styles.collections}>
          {collectionsList.map((item) => {
            const numberOfTasks = item.todo.length;
            const numberOfTasksDone = item.todo.filter(
              (todo) => todo.isChecked
            ).length;
            const percentageDone = (numberOfTasksDone / numberOfTasks) * 360;
            <p></p>;
            return (
              <div className={styles.collection__details}>
                <CollectionItem
                  collection={item}
                  className={styles.collection__name}
                  key={item.id}
                />
                <div className={styles["percentage-done"]}>
                  <p>
                    {numberOfTasks > 0
                      ? numberOfTasksDone + "/" + numberOfTasks + " done"
                      : "No tasks yet"}
                  </p>
                  {percentageDone === 360 ? (
                    <div
                      className={styles.done}
                      style={{ backgroundColor: item.color }}
                    >
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
        </div>
        {showForm ? (
          <CollectionForm closeForm={closeForm} />
        ) : (
          <button
            className={styles["add-collection"]}
            onClick={displayCollectionForm}
          >
            <FaPlus />
          </button>
        )}
      </div>
    </>
  );
};
export default Collections;

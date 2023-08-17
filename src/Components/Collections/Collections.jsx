import { Fragment, useEffect, useRef, useState } from "react";
import {
  FaPlus,
  FaCheck,
  FaCaretDown,
  FaCaretUp,
  FaBriefcase,
  FaCode,
  FaUser,
  FaPaintBrush,
  FaBook,
  FaShoppingCart,
} from "react-icons/fa";
import { collectionsList } from "../../utilities";
import styles from "./Collections.module.css";
import CollectionItem from "../CollectionItem/CollectionItem";
import Tab from "../Tab/Tab";

const Collections = () => {
  const [index, setIndex] = useState(2);
  const [showForm, setDisplayForm] = useState(false);
  const [showDropdown, setShowDropDown] = useState(false);
  const nameRef = useRef();
  const colorRef = useRef();
  const iconRef = useRef();
  const setIndexValue = (event) => {
    const indexValue = event.target.getAttribute("data-index");
    setIndex(indexValue);
  };
  useEffect(() => {}, [collectionsList]);

  const displayCollectionForm = () => setDisplayForm(true);
  const closeForm = () => setDisplayForm(false);

  const inputHandler = (event) => {
    event.preventDefault();
    const value = event.target.name
      .match(/[A-Z][a-z]+/g)
      .splice(1)
      .join(" ");
    document.querySelector("#icon").value = value;
    iconRef.current.value = event.target.name;
    setShowDropDown(false);
  };

  const createNewCollection = (event) => {
    event.preventDefault();
    const newCollection = {
      id: collectionsList.length + 1,
      title: nameRef.current.value,
      color: colorRef.current.value,
      icon: eval(iconRef.current.value),
      todo: [],
    };
    console.log(newCollection);
    collectionsList.push(newCollection);
  };
  const toggleDropdown = () =>
    showDropdown ? setShowDropDown(false) : setShowDropDown(true);

  return (
    <Fragment>
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
          <div className={"form__container " + styles.collection__form}>
            <form onSubmit={createNewCollection} className="form">
              <div>
                <label htmlFor="collection-name"> Collection Name:</label>
                <input
                  type="text"
                  id={styles["collection-name"]}
                  placeholder="Add a collection"
                  ref={nameRef}
                  name="name" 
                />
              </div>
              <div className={"form__extras " + styles.collection__design}>
                <div>
                  <label htmlFor="collection-icon">Icon:</label>
                  <div
                    name=""
                    id={styles["collection-icon"]}
                    className={styles.select}
                    style={{
                      borderBottomLeftRadius: showDropdown && "0",
                      borderBottomRightRadius: showDropdown && "0",
                    }}
                  >
                    <input
                      type="text"
                      name=""
                      id="icon"
                      disabled="disabled"
                      ref={iconRef}
                    />
                    {showDropdown ? (
                      <FaCaretUp onClick={toggleDropdown} />
                    ) : (
                      <FaCaretDown onClick={toggleDropdown} />
                    )}
                  </div>
                  {showDropdown && (
                    <div className={styles.options}>
                      <button name="FaBook" onClick={inputHandler}>
                        <FaBook />
                      </button>
                      <button name="FaBriefcase" onClick={inputHandler}>
                        <FaBriefcase value="FaBriefcase" />
                      </button>
                      <button name="FaCode" onClick={inputHandler}>
                        <FaCode />
                      </button>
                      <button name="FaUser" onClick={inputHandler}>
                        <FaUser />
                      </button>
                      <button name="FaShoppingCart" onClick={inputHandler}>
                        <FaShoppingCart />
                      </button>
                      <button name="FaPaintBrush" onClick={inputHandler}>
                        <FaPaintBrush />
                      </button>
                      <button name="FaPaintBrush" onClick={inputHandler}>
                        <FaPaintBrush />
                      </button>
                      <button name="FaPaintBrush" onClick={inputHandler}>
                        <FaPaintBrush />
                      </button>
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor="collection-color"> Color:</label>
                  <input
                    type="color"
                    id={styles["collection-color"]}
                    ref={colorRef}
                  />
                </div>
              </div>
              <div className="form__actions">
                <button onClick={closeForm}>Cancel</button>
                <button type="submit">Add Collection</button>
              </div>
            </form>
          </div>
        ) : (
          <button
            className={styles["add-collection"]}
            onClick={displayCollectionForm}
          >
            <FaPlus />
          </button>
        )}
      </div>
    </Fragment>
  );
};
export default Collections;

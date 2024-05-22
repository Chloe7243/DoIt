import Form from "../UI/Form/Form";
import {
  FaCaretDown,
  FaCaretUp,
  FaBriefcase,
  FaCode,
  FaUser,
  FaPaintBrush,
  FaBook,
  FaShoppingCart,
} from "react-icons/fa";

import styles from "./CollectionForm.module.css";
import { useState } from "react";

const CollectionForm = ({ closeForm }) => {
  const [showDropdown, setShowDropDown] = useState(false);
  const [formValues, setFormValues] = useState({
    title: "",
    icon: "",
    color: "",
  });

  const iconInputHandler = (event) => {
    event.preventDefault();
    const value = event.target.name;
    setFormValues((prev) => ({ prev, icon: value }));
    setShowDropDown(false);
  };

  const formiconInputHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const createNewCollection = (event) => {
    event.preventDefault();
    const newCollection = {
      id: collectionsList.length + 1,
      ...formValues,
      todo: [],
    };
    console.log(newCollection);
    collectionsList.push(newCollection);
  };
  const toggleDropdown = () =>
    showDropdown ? setShowDropDown(false) : setShowDropDown(true);

  return (
    <>
      <Form onSubmit={createNewCollection}>
        <div>
          <label htmlFor="collection-name"> Collection Name:</label>
          <input
            type="text"
            id={styles["collection-name"]}
            placeholder="Collection title"
            name="title"
            value={formValues.title.slice(2).split(/([A-Z])/).join(" ")}
            onChange={formiconInputHandler}
          />
        </div>
        <div className={"form__extras " + styles.collection__design}>
          <div>
            <label htmlFor="collection-icon">Icon:</label>
            <div
              id={styles["collection-icon"]}
              className={styles.select}
              style={{
                borderBottomLeftRadius: showDropdown && "0",
                borderBottomRightRadius: showDropdown && "0",
              }}
            >
              <input
                type="text"
                name="icon"
                disabled="disabled"
                value={formValues.icon}
                placeholder="Add an icon"
              />
              {showDropdown ? (
                <FaCaretUp onClick={toggleDropdown} />
              ) : (
                <FaCaretDown onClick={toggleDropdown} />
              )}
            </div>
            {showDropdown && (
              <div className={styles.options}>
                <button name="FaBook" onClick={iconInputHandler}>
                  <FaBook />
                </button>
                <button name="FaBriefcase" onClick={iconInputHandler}>
                  <FaBriefcase />
                </button>
                <button name="FaCode" onClick={iconInputHandler}>
                  <FaCode />
                </button>
                <button name="FaUser" onClick={iconInputHandler}>
                  <FaUser />
                </button>
                <button name="FaShoppingCart" onClick={iconInputHandler}>
                  <FaShoppingCart />
                </button>
                <button name="FaPaintBrush" onClick={iconInputHandler}>
                  <FaPaintBrush />
                </button>
              </div>
            )}
          </div>
          <div>
            <label htmlFor="collection-color"> Color:</label>
            <input
              type="color"
              name="color"
              value={formValues.color}
              id={styles["collection-color"]}
              onChange={formiconInputHandler}
            />
          </div>
        </div>
        <div className="form__actions">
          <button onClick={closeForm}>Cancel</button>
          <button type="submit">Add Collection</button>
        </div>
      </Form>
    </>
  );
};

export default CollectionForm;

import CollectionItem from "../CollectionItem/CollectionItem";
import "./CollectionCard.css";
import {
  PiCaretDownThin,
  PiArrowRightBold,
  PiCaretUpThin,
} from "react-icons/pi";
import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";

const CollectionCard = ({ item, i, setContentToDisplay, setItem }) => {
  const [viewList, setViewList] = useState(false);
  const displayTodoItems = () => {
    viewList ? setViewList(false) : setViewList(true);
  };

  const changeMainContent = () => {
    setItem(item);
    setContentToDisplay("CollectionTasks");
  };

  return (
    <div className="collection-details" key={item.title + i + "234"}>
      <div className="collection-details__header">
        <CollectionItem collection={item}/>
        {viewList ? (
          <PiCaretUpThin
            className="collection-details__header__icon"
            onClick={displayTodoItems}
          />
        ) : (
          <PiCaretDownThin
            style={{ cursor: "pointer", transform: "rotateY(-180deg)" }}
            onClick={displayTodoItems}
          />
        )}
      </div>
      <ul
        className="collection-details__items"
        style={{ padding: viewList ? "1rem" : "" }}
      >
        {viewList &&
          item.todo.map((task, i) => (
            <TodoItem task={task} key={task.title[0] + i} color={item.color} />
          ))}
      </ul>

      <button className="go-to__collection" onClick={changeMainContent}>
        Go to Collection
        <PiArrowRightBold className="go-to__collection__icon" />
      </button>
    </div>
  );
};

export default CollectionCard;

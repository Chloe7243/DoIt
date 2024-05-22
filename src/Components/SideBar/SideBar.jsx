import "./SideBar.css";
import CollectionItem from "../CollectionItem/CollectionItem";
import { collectionsList } from "../../utilities";

const SideBar = ({ isVisible, displayTasks }) => {
  return (
    <div className={"side-container" + (!isVisible ? " not-visible" : "")}>
      <h4 className="side-container__title">Collections</h4>
      <div>
        {collectionsList.map((item, i) => {
          return (
            <CollectionItem
              collection={item}
              key={item.color + i + "234"}
              onClick={displayTasks}
              style={{ cursor: "pointer" }}
            />
          );
        })}
      </div>
      <button>Logout</button>
    </div>
  );
};

export default SideBar;

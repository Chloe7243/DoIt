import "./SideBar.css";
import CollectionItem from "../CollectionItem/CollectionItem";
import { collectionsList } from "../../utilities";

const SideBar = ({ isVisible, activeCollection, displayTasks }) => {
  return (
    <div className={"side-container" + (!isVisible ? " not-visible" : "")}>
      <h4 className="side-container__title">Collections</h4>
      {collectionsList.map((item, i) => {
        return (
          <CollectionItem
            collection={item}
            key={item.color + i + "234"}
            isActive={activeCollection.id === item.id ? true : false}
            onClick={displayTasks}
            style={{cursor: "pointer"}}
          />
        );
      })}
    </div>
  );
};

export default SideBar;

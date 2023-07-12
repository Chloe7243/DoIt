import "./SideContent.css";
import CollectionItem from "../UI/CollectionItem/CollectionItem";
import { collectionsList } from "../../Utilties/CollectionItems";

const SideContent = ({ visible }) => {
  return (
    <div className={`side-container ${visible ? "visible" : "is-not-visible"}`}>
      <p className="side-container__title">Collections</p>
      {collectionsList.map((item, i) => {
        return (
          <CollectionItem collection={item} key={item.color + i + "234"} />
        );
      })}
    </div>
  );
};

export default SideContent;

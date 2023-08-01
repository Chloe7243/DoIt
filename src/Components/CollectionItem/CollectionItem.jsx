import "./CollectionItem.css";
const CollectionItem = ({ collection, style, isActive, onClick }) => {
  const setTasksToDisplay = () => onClick(collection);

  return (
    <div
      className={"collection" + (isActive ? " activeCollection" : "")}
      onClick={setTasksToDisplay}
    >
      <div
        className="collection__icon"
        style={{ backgroundColor: collection.color, ...style }}
      >
        <collection.icon />
      </div>
      <div className="collection__title">{collection.title}</div>
    </div>
  );
};

export default CollectionItem;

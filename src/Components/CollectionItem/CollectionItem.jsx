import "./CollectionItem.css";
const CollectionItem = ({ collection, style, isActive, onClick, className }) => {
  const setTasksToDisplay = () => onClick(collection);
  const classes = `collection ${isActive ? " activeCollection" : ""} ${className && className}`
  return (
    <div className={classes} onClick={setTasksToDisplay} style={{ ...style }}>
      <div
        className="collection__icon"
        style={{ backgroundColor: collection.color}}
      >
        <collection.icon />
      </div>
      <p className="collection__title">{collection.title}</p>
    </div>
  );
};

export default CollectionItem;

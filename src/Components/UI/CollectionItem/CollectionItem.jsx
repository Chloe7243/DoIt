import "./CollectionItem.css"
const CollectionItem = ({ collection }) => {
  return (
    <div className="collection">
      <div className="collection__icon" style={{backgroundColor: collection.color}}>
        <collection.icon />
      </div>
      <div className="collection__title">{collection.title}</div>
    </div>
  );
};

export default CollectionItem;

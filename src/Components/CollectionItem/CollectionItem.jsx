import { NavLink } from "react-router-dom";
import "./CollectionItem.css";
const CollectionItem = ({ collection, style, onClick, className }) => {
  let active = false;
  return (
    <div className="collection">
      <NavLink
        to={`/collections/${collection.id}`}
        className={({ isActive }) => (isActive ? "activeCollection" : "")}
        style={style}
        onClick={onClick}
      >
        <div
          className="collection__icon"
          style={{ backgroundColor: collection.color }}
        >
          <collection.icon />
        </div>
        <p className="collection__title">{collection.title}</p>
      </NavLink>
    </div>
  );
};

export default CollectionItem;

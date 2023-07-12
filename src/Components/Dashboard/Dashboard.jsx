import { useState } from "react";
import { collectionsList } from "../../Utilties/CollectionItems";
import "./Dashboard.css";
import CollectionCard from "../CollectionCard/CollectionCard";
import Tab from "../Tab/Tab";

const Dashboard = ({ setContentToDisplay, setItem }) => {
  const [index, setIndex] = useState(0);
  const [itemHeight, setItemHeight] = useState("57vh");
  const username = "Jane Doe";
  const setIndexValue = (event) => {
    const indexValue = event.target.getAttribute("data-index");
    setIndex(indexValue);
  };

  const getHeight = (height) => setItemHeight(height);
  return (
    <div className="dashboard">
      <h3>Dashboard</h3>
      <h1>
        Good morning, <br />
        {username}
      </h1>
      <Tab
        className={index == 0 ? "active" : ""}
        onClick={setIndexValue}
        value="0"
      >
        Daily Overview
      </Tab>
      <Tab
        className={index == 1 ? "active" : ""}
        onClick={setIndexValue}
        value="1"
      >
        Statistics
      </Tab>
      <div
        className="dashboard-collection__items"
        style={{ height: itemHeight }}
      >
        {collectionsList.map((item, i) => (
          <CollectionCard
            item={item}
            i={i}
            key={i + "234"}
            setContentToDisplay={setContentToDisplay}
            setItem={setItem}
            getHeight={getHeight}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

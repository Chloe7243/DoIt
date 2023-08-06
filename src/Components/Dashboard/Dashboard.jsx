import { useState } from "react";
import { collectionsList } from "../../utilities";
import "./Dashboard.css";
import CollectionCard from "../CollectionCard/CollectionCard";
import Tab from "../Tab/Tab";

const Dashboard = ({ setContentToDisplay, setItem }) => {
  const [index, setIndex] = useState(0);
  const username = "Jane Doe";
  const setIndexValue = (event) => {
    const indexValue = event.target.getAttribute("data-index");
    setIndex(indexValue);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h3>Dashboard</h3>
        <h1>
          Good morning, <br />
          {username}
        </h1>
        <Tab
          className={index == 0 ? " activeTab" : ""}
          onClick={setIndexValue}
          value="0"
          key={0}
        >
          Daily Overview
        </Tab>
        <Tab
          className={index == 1 ? " activeTab" : ""}
          onClick={setIndexValue}
          value="1"
          key={1}
        >
          Statistics
        </Tab>
      </div>
      <div className="dashboard-collection__items">
        {collectionsList.map((item, i) => (
          <CollectionCard
            item={item}
            i={i}
            key={i + "234"}
            setContentToDisplay={setContentToDisplay}
            setItem={setItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

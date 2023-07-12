import { useState } from "react";
import "./App.css";
import MainContainer from "./Components/UI/MainContainer";
import MainContent from "./Components/MainContent/MainContent";
import SideContent from "./Components/SideContent/SideContent";
import NavigavtionBar from "./Components/NavContent/NavContent";
import Dashboard from "./Components/Dashboard/Dashboard";
import CollectionTasks from "./Components/CollectionTasks/CollectionTasks";

function App() {
  const [isVisible, setVisibility] = useState(false);
  const [contentToDisplay, setContentToDisplay] = useState("Dashboard");
  const [item, setItem] = useState({});

  const toggleSidebarVisibility = () =>
    isVisible ? setVisibility(false) : setVisibility(true);

  let collectionItem;

  // const changeContent = (item) => {
  //   (collectionItem = item);

  //   viewTasks ? setViewTasks(false) : setViewTasks(true);
  // }
  return (
    <div>
      <NavigavtionBar
        onMakeVisible={toggleSidebarVisibility}
        setContentToDisplay={setContentToDisplay}
      />
      <MainContainer>
        <SideContent />
        <MainContent>
          {contentToDisplay === "Dashboard" ? (
            <Dashboard
              setContentToDisplay={setContentToDisplay}
              setItem={setItem}
            />
          ) : contentToDisplay === "CollectionTasks" ? (
            <CollectionTasks collectionItem={item} />
          ) : contentToDisplay === "Collection" ? (
            "Collections"
          ) : (
            "Tasks"
          )}
        </MainContent>
      </MainContainer>
    </div>
  );
}

export default App;

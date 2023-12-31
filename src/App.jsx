import { useEffect, useState } from "react";
import "./App.css";
import MainContainer from "./Components/UI/MainContainer";
import Main from "./Components/Main/Main";
import SideBar from "./Components/SideBar/SideBar";
import NavigavtionBar from "./Components/NavBar/NavBar";
import Dashboard from "./Components/Dashboard/Dashboard";
import CollectionTasks from "./Components/CollectionTasks/CollectionTasks";
import Collections from "./Components/Collections/Collections";

function App() {
  let content;
  const [isSideBarVisible, setSideBarVisibility] = useState(false);
  const [contentToDisplay, setContentToDisplay] = useState("Dashboard");
  const [prevPage, setprevPage] = useState("");
  const [item, setItem] = useState({});

  const toggleSidebarVisibility = () =>
    isSideBarVisible ? setSideBarVisibility(false) : setSideBarVisibility(true);

  const displayTasks = (item) => {
    setContentToDisplay("CollectionTasks");
    setItem(item);
    toggleSidebarVisibility();
  };

  const getPreviousPage = () => {};

  useEffect(() => {
    if (contentToDisplay != "CollectionTasks") setItem({});
    setprevPage(contentToDisplay);
  }, [contentToDisplay]);

  switch (contentToDisplay) {
    case "Dashboard":
      content = (
        <Dashboard
          setContentToDisplay={setContentToDisplay}
          setItem={setItem}
        />
      );
      break;
    case "CollectionTasks":
      content = (
        <CollectionTasks
          collectionItem={item}
          renderPreviousPage={getPreviousPage}
          key={item.id}
        />
      );
      break;
    case "Collections":
      content = <Collections setContentToDisplay={setContentToDisplay} />;
      break;
    default:
      content = (
        <Dashboard
          setContentToDisplay={setContentToDisplay}
          setItem={setItem}
        />
      );
  }

  return (
    <div>
      <NavigavtionBar
        toggleSideBar={toggleSidebarVisibility}
        setContentToDisplay={setContentToDisplay}
      />
      <MainContainer
        isVisible={window.innerWidth < 600 ? isSideBarVisible : true}
      >
        <SideBar
          activeCollection={item}
          displayTasks={displayTasks}
          isVisible={window.innerWidth < 600 ? isSideBarVisible : true}
        />
        <Main>{content}</Main>
        {window.innerWidth < 600 && isSideBarVisible ? (
          <div className="overlay" onClick={toggleSidebarVisibility}></div>
        ) : (
          ""
        )}
      </MainContainer>
    </div>
  );
}

export default App;

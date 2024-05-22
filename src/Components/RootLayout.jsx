import { Outlet } from "react-router-dom";
import NavigavtionBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import Main from "./Main/Main";
import MainContainer from "./UI/MainContainer";
import { useState } from "react";
const Root = () => {
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
  return (
    <>
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
        <Main>
          <Outlet />
        </Main>
        {window.innerWidth < 600 && isSideBarVisible ? (
          <div className="overlay" onClick={toggleSidebarVisibility}></div>
        ) : (
          ""
        )}
      </MainContainer>
    </>
  );
};

export default Root;

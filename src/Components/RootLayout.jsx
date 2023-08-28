import { Outlet } from "react-router-dom";
import NavigavtionBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import Main from "./Main/Main";
import MainContainer from "./UI/MainContainer";
const Root = () => {
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
        <Main>{content}</Main>
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

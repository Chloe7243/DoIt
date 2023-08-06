import { FaBars, FaSearch, FaBell } from "react-icons/fa";
import { BiSolidDashboard, BiCollection } from "react-icons/bi";
import ProfilePicture from "../../assets/profilepic.jpg";
import "./NavBar.css";

const NavigavtionBar = ({ setContentToDisplay, toggleSideBar}) => {
  const changeMainContent = (event) => {
    if (event.target.className == "navigation-bar__page") {
      setContentToDisplay(event.target.textContent);
    } else if (event.target.nodeName == "path") {
      setContentToDisplay(event.target.parentElement.parentElement.textContent);
    } else {
      setContentToDisplay(event.target.parentElement.textContent);
    }
  };

  return (
    <div className="navigation-bar">
      <div className="navigation-bar__left">
        <FaBars className="navbar-icon" onClick={toggleSideBar} />
        <div className="navigation-bar__page" onClick={changeMainContent}>
          <BiSolidDashboard />
          <p>Dashboard</p>
        </div>
        <div className="navigation-bar__page" onClick={changeMainContent}>
          <BiCollection />
          <p>Collections</p>
        </div>
      </div>
      <div className="navigation-bar__right">
        <FaSearch />
        <FaBell />
        <div className="user__profile">
          <img src={ProfilePicture} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavigavtionBar;

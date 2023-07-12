import { FaBars, FaSearch, FaBell } from "react-icons/fa";
import { BiSolidDashboard, BiCollection } from "react-icons/bi";
import ProfilePicture from "../../assets/profilepic.jpg";
import "./NavContent.css";
import Dashboard from "../Dashboard/Dashboard";

const NavigavtionBar = ({ setContentToDisplay }) => {
  const changeMainContent = (event) => {
    setContentToDisplay(event.target.textContent);
  };

  return (
    <div className="navigation-bar">
      <div className="navigation-bar__left">
        <div className="navigation-bar__page" onClick={changeMainContent}>
          <BiSolidDashboard />
          <p>Dashboard</p>
        </div>
        <div className="navigation-bar__page" onClick={changeMainContent}>
          <BiCollection /> <p>Collection</p>
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

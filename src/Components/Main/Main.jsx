import "./Main.css";

const Main = ({ children, visible }) => {
  return (
    <div
      className={`main-content__container ${
        visible ? "visible" : "notvisible"
      }`}
    >
      <div className="main-content__inner">{children}</div>
    </div>
  );
};

export default Main;

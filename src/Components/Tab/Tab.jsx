import "./Tab.css";

const Tab = ({ children, className, onClick, value }) => {
  return (
    <div
      className={className ? "tab " + className : "tab"}
      onClick={onClick}
      data-index={value}
    >
      {children}
    </div>
  );
};

export default Tab;

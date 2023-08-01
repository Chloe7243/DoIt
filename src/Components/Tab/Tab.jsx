import "./Tab.css";

const Tab = ({ children, className, onClick, value }) => {
  return (
    <div
      className={"tab" + className}
      onClick={onClick}
      data-index={value}
    >
      {children}
    </div>
  );
};

export default Tab;

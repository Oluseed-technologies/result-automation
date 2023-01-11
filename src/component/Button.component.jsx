const ButtonComponent = ({ title, name, bgcolor, hover, ClickHandler }) => {
  return (
    <button
      name={name}
      className={` ${bgcolor === undefined ? "bg-blue-500" : bgcolor} ${
        hover === undefined ? "hover:bg-blue-900" : hover
      } mr-3 0 text-white py-2 px-4 rounded-md`}
      onClick={ClickHandler}
    >
      {title}
    </button>
  );
};

export default ButtonComponent;

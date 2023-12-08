const Backdrop = (props) => {
  return (
    <div
      onClick={props.func}
      className={props.state ? "backdrop" : "hidden"}
    ></div>
  );
};

export default Backdrop;

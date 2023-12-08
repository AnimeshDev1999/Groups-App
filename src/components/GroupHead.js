import barr from "../images/icons/back-arrow.svg";

const GroupHead = (props) => {
  return (
    <div className="grp-hed flex flex-col justify-between gap-36 lg:gap-[20rem] py-4 px-6 xl:px-48">
      <div className="flex justify-between items-center">
        <img src={barr} alt="" className="h-6 lg:hidden" />
        <button
          onClick={props.func}
          className="text-white border-white border-2 lg:hidden rounded-md px-2"
        >
          {props.state ? "Leave Group" : "Join Group"}
        </button>
      </div>
      <div className="text-white mb-7">
        <h1 className="font-semibold text-2xl lg:text-3xl lg:text-4xl">
          Computer Engineering
        </h1>
        <p className="text-sm">142,765 Computer Engineers follow this</p>
      </div>
    </div>
  );
};

export default GroupHead;

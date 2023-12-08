import circle from "../images/icons/circle.svg";
import square from "../images/icons/square.svg";
import triangle from "../images/icons/triangle.svg";
import logo from "../images/logo.png";

const Navbar = (props) => {
  return (
    <div className="lg:px-16 lg:py-2 lg:flex lg:justify-between lg:items-center">
      <img src={logo} className="hidden lg:block" alt="" />
      <input
        type="text"
        placeholder="Search for your favorite groups in ATG"
        className="hidden text-center lg:block bg-[#F2F2F2] my-1 py-2 px-4 w-1/3 rounded-[100rem]"
      />
      <p className="pos-cen gap-1 hidden lg:block">
        Create a account.{" "}
        <span onClick={props.func} className="text-[#2F6CE5]">
          It's free!
        </span>{" "}
        <span className="text-xs">&#9660;</span>
      </p>
      <div className="flex gap-3 py-2 px-3 justify-end lg:hidden">
        <img src={square} alt="" className="h-4" />
        <img src={circle} alt="" className="h-4" />
        <img src={triangle} alt="" className="h-4 rotate-180" />
      </div>
    </div>
  );
};

export default Navbar;

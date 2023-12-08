import close from "../images/icons/close.svg";
import vec from "../images/vec.png";
import fb from "../images/fb.png";
import gg from "../images/gg.png";

const Modal = (props) => {
  return (
    <div
      className={
        props.state ? "modal py-6 px-5 flex flex-col gap-6 lg:mod" : "hidden"
      }
    >
      <div className="py-6 px-5 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Welcome back!</h1>
          <img onClick={props.func} src={close} className="h-8 w-8" alt="" />
        </div>
        <div className="flex flex-col">
          <input className="form-fld" placeholder="Email" type="email" />
          <input className="form-fld" placeholder="Password" type="password" />
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-[#2F6CE5] text-white lg:w-full py-3 px-8 rounded-[100rem]">
            Sign In
          </button>
          <p
            onClick={props.func2}
            className="underline lg:hidden font-semibold text-[#495057]"
          >
            or, Create Account
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <button className="big-btn pos-cen gap-3">
            <img src={fb} alt="" /> Sign in with Facebook
          </button>
          <button className="big-btn pos-cen gap-3">
            <img src={gg} alt="" /> Sign in with Google
          </button>
        </div>
        <p className="text-center text-sm">Forgot Password?</p>
      </div>
      <div className="py-6 px-5 hidden lg:flex flex-col justify-between gap-6 ">
        <p>
          Don’t have an account yet?{" "}
          <span onClick={props.func2} className="text-[#2F6CE5]">
            Create new for free!
          </span>
        </p>
        <img src={vec} alt="" />
      </div>
    </div>
  );
};

export default Modal;

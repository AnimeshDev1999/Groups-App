import close from "../images/icons/close.svg";
import vec from "../images/vec.png";
import fb from "../images/fb.png";
import gg from "../images/gg.png";

const Modal2 = (props) => {
  return (
    <div
      className={
        props.state ? "modal py-6 px-5 flex flex-col gap-6 lg:mod" : "hidden"
      }
    >
      <div className="py-6 px-5 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Create Account</h1>
          <img onClick={props.func} src={close} className="h-8 w-8" alt="" />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <input
              className="form-fld w-1/2"
              placeholder="First Name"
              type="text"
            />
            <input
              className="form-fld w-1/2"
              placeholder="Last Name"
              type="text"
            />
          </div>
          <input className="form-fld" placeholder="Email" type="email" />
          <input className="form-fld" placeholder="Password" type="password" />
          <input
            className="form-fld"
            placeholder="Confirm Password"
            type="password"
          />
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-[#2F6CE5] text-white py-3 px-8 rounded-[100rem]">
            Create Account
          </button>
          <p
            onClick={props.func2}
            className="underline font-semibold text-[#495057]"
          >
            or, Sign In
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <button className="big-btn pos-cen gap-3">
            <img src={fb} alt="" /> Sign up with Facebook
          </button>
          <button className="big-btn pos-cen gap-3">
            <img src={gg} alt="" /> Sign up with Google
          </button>
        </div>
      </div>
      <div className="py-6 px-5 hidden lg:flex flex-col justify-between gap-6 ">
        <p>
          Already have an account?{" "}
          <span onClick={props.func2} className="text-[#2F6CE5]">
            Sign In
          </span>
        </p>
        <img src={vec} alt="" />
        <p className=" text-sm">
          By signing up, you agree to our Terms & conditions, Privacy policy
        </p>
      </div>
      <p className="text-center text-sm lg:hidden">
        By signing up, you agree to our Terms & conditions, Privacy policy
      </p>
    </div>
  );
};

export default Modal2;

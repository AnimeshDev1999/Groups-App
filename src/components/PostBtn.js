import edit from "../images/icons/edit.svg";

const PostBtn = (props) => {
  return (
    <div
      onClick={props.func}
      className="post-btn pos-cen fixed bottom-5 right-5 rounded-full h-16 w-16 z-10 lg:hidden  "
    >
      <img src={edit} alt="" />
    </div>
  );
};

export default PostBtn;

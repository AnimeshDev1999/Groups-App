import JobEdu from "../components/JobEdu";
import Event from "../components/Event";
import Job from "../components/Job";
import img1 from "../images/img1.png";
import usr1 from "../images/user1.png";
import img2 from "../images/img2.png";
import usr2 from "../images/user2.png";
import usr3 from "../images/user3.png";
import img4 from "../images/img4.png";
import usr4 from "../images/user4.png";
import rec1 from "../images/rec1.png";
import rec2 from "../images/rec2.png";
import rec3 from "../images/rec3.png";
import rec4 from "../images/rec4.png";

const data = [
  {
    cat: "Article",
    img: img1,
    type: "✍ Article",
    hed: "What if famous brands had regular fonts? Meet RegulaBrands!",
    sub: "I’ve worked in UX for the better part of a decade. F...",
    usr: usr1,
    nam: "Sarthak Karma",
    views: "1.4k",
  },
  {
    cat: "Article",
    img: img4,
    type: "🔬 Education",
    hed: "Tax Benefits for Investment under National Pension Scheme launched by Government",
    sub: "I’ve worked in UX for the better part of a decade. F..",
    usr: usr4,
    nam: "Sarah West",
    views: "4.8k",
  },
  {
    cat: "Event",
    img: img2,
    type: "📅 Meetup",
    hed: "Finance & Investment Elite Social Mixer @Lujiazui",
    dat: "Fri, 12 Oct, 2018",
    loc: "Ahmedabad, India",
    usr: usr2,
    nam: "Ronal Jones",
    views: "800",
  },
  {
    cat: "Job",
    type: "💼 Job",
    hed: "Software Developer - II",
    com: "Innovaccer Analytic...",
    loc: "Noida, India",
    usr: usr3,
    nam: "Joseph Gray",
    views: "1.7k",
  },
  {
    cat: "Job",
    type: "💼 Internship",
    hed: "Front-end Web Developer",
    com: "The moon and the...",
    loc: "Lucknow, India",
    usr: usr4,
    nam: "Sarah West",
    views: "1.7k",
  },
];

const PostPane = (props) => {
  const onOff = (e) => {
    e.target.classList.toggle("on-off");
    if (e.target.innerText === "Follow") {
      e.target.innerText = "Following";
    } else {
      e.target.innerText = "Follow";
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[3fr,1fr] xl:gap-16 xl:px-36">
      <div className="flex flex-col justify-center gap-3 xl:self-start xl:gap-8 py-2 max-w-[1280px] mx-auto self-start">
        {data.map((item) =>
          item.cat === "Article" ? (
            <JobEdu dat={item}></JobEdu>
          ) : item.cat === "Event" ? (
            <Event dat={item}></Event>
          ) : (
            <Job dat={item}></Job>
          )
        )}
      </div>
      <div className="hidden xl:block pos-cen mx-auto py-6">
        <input
          type="text"
          placeholder="Noida, India"
          className="border-b-2 w-full mb-10"
        />
        <p className="text-xs text-[#8A8A8A] mb-10">
          Your location will help us serve better and extend a personalised
          experience.
        </p>
        <h3 className={props.state ? "uppercase mb-5" : "hidden"}>
          Recommended Groups
        </h3>
        <div className={props.state ? "flex flex-col gap-5" : "hidden"}>
          <div className="flex items-center justify-between">
            <div className="pos-cen gap-5">
              <img src={rec1} alt="" />
              <p>Leisure</p>
            </div>
            <button onClick={onOff} className="rec-follow-btn">
              Follow
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="pos-cen gap-5">
              <img src={rec2} alt="" />
              <p>Activism</p>
            </div>
            <button onClick={onOff} className="rec-follow-btn">
              Follow
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="pos-cen gap-5">
              <img src={rec3} alt="" />
              <p>MBA</p>
            </div>
            <button onClick={onOff} className="rec-follow-btn">
              Follow
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="pos-cen gap-5">
              <img src={rec4} alt="" />
              <p>Philosophy</p>
            </div>
            <button onClick={onOff} className="rec-follow-btn">
              Follow
            </button>
          </div>
          <p className="text-right text-[#2F6CE5]">See More...</p>
        </div>
      </div>
    </div>
  );
};

export default PostPane;

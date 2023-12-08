import share from "../images/icons/share.svg";
import three from "../images/icons/three-dots.svg";
import cal from "../images/icons/calendar.svg";
import loc from "../images/icons/location.svg";

const Event = (props) => {
  return (
    <div className="post-defs">
      <img src={props.dat.img} className="posi-img mx-auto" alt="" />
      <div className="flex flex-col py-4 px-6">
        <h3 className="text-[#343A40] mb-2">{props.dat.type}</h3>
        <div className="flex justify-between items-center gap-5">
          <h2 className="font-semibold mb-2">{props.dat.hed}</h2>
          <img src={three} className="w-5" alt="" />
        </div>
        <div className="flex justify-between mb-4">
          <div className="pos-cen gap-2">
            <img className="post-ico" src={cal} alt="" />
            <p>{props.dat.dat}</p>
          </div>
          <div className="pos-cen gap-2">
            <img className="post-ico" src={loc} alt="" />
            <p>{props.dat.loc}</p>
          </div>
        </div>
        <button className="mb-8 border-[1px] border-[#818488] text-[#E56135] py-2 rounded-md">
          Visit Webiste
        </button>
        <div className="flex justify-between">
          <div className="flex justify-center gap-3 items-center">
            <img src={props.dat.usr} className="post-dp" alt="" />
            <div className="text-[#212529]">
              <h2 className="font-semibold text-sm">{props.dat.nam}</h2>
              <span className="text-sm">{props.dat.views} views</span>
            </div>
          </div>
          <button className="pos-cen gap-1 text-sm bg-[#F1F3F5] px-3 rounded-md">
            <img src={share} className="h-5" alt="" /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;

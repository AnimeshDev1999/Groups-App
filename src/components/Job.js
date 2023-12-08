import share from "../images/icons/share.svg";
import three from "../images/icons/three-dots.svg";
import bag from "../images/icons/bag.svg";
import loc from "../images/icons/location.svg";

const Job = (props) => {
  return (
    <div className="post-defs">
      <div className="flex flex-col py-4 px-6">
        <h3 className="text-[#343A40] mb-2">{props.dat.type}</h3>
        <div className="flex justify-between items-center gap-5">
          <h2 className="font-semibold mb-2">{props.dat.hed}</h2>
          <img src={three} className="w-5" alt="" />
        </div>
        <div className="flex justify-between mb-4">
          <div className="pos-cen gap-2">
            <img className="post-ico" src={bag} alt="" />
            <p>{props.dat.com}</p>
          </div>
          <div className="pos-cen gap-2">
            <img className="post-ico" src={loc} alt="" />
            <p>{props.dat.loc}</p>
          </div>
        </div>
        <button className="mb-8 border-[1px] border-[#818488] text-[#02B875] py-2 rounded-md">
          Apply on Timesjobs
        </button>
        <div className="flex justify-between">
          <div className="flex justify-center gap-3 items-center">
            <img src={props.dat.usr} className="post-dp" alt="" />
            <div className="text-[#212529]">
              <h2 className="font-semibold text-sm">Joseph Gray</h2>
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

export default Job;

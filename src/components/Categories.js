import React, { useState } from "react";

const Categories = (props) => {
  const [cate, setCate] = useState("All");
  const switchCat = (e) => {
    setCate(e.target.name);
    props.cat(e.target.name);
  };

  const switchCatMob = (e) => {
    setCate(e.target.value);
    props.cat(e.target.value);
  };

  return (
    <div className="flex justify-between lg:border-b-2 py-4 mx-5 lg:mx-6 xl:mx-0 lg:mb-8 xl:px-48">
      <div className="flex gap-4">
        <p onClick={switchCat} className="font-bold lg:hidden">
          Posts(368)
        </p>
        <button
          onClick={switchCat}
          name="All"
          className={cate === "All" ? "cat-btn cat-active" : "cat-btn"}
        >
          All Posts (368)
        </button>
        <button
          onClick={switchCat}
          name="Article"
          className={cate === "Article" ? "cat-btn cat-active" : "cat-btn"}
        >
          Article
        </button>
        <button
          onClick={switchCat}
          name="Event"
          className={cate === "Event" ? "cat-btn cat-active" : "cat-btn"}
        >
          Event
        </button>
        <button
          onClick={switchCat}
          name="Education"
          className={cate === "Education" ? "cat-btn cat-active" : "cat-btn"}
        >
          Education
        </button>
        <button
          onClick={switchCat}
          name="Job"
          className={cate === "Job" ? "cat-btn cat-active" : "cat-btn"}
        >
          Job
        </button>
      </div>
      <div className="pos-cen gap-3">
        <button className="bg-[#F1F3F5] px-2 py-1 w-[7rem] rounded-md hidden lg:block">
          Write a Post
        </button>
        <button
          onClick={props.func}
          className={
            props.state
              ? "bg-white text-slate-600 px-2 py-1 w-[7rem] rounded-md hidden ring-2 ring-slate-300 ring-inset lg:block"
              : "bg-[#2F6CE5] text-white px-2 py-1 w-[7rem] rounded-md hidden lg:block"
          }
        >
          {props.state ? "Leave Group" : "Join Group"}
        </button>
        <select className="bg-[#F1F3F5] px-2 py-1 rounded-md lg:hidden">
          <option onClick={switchCatMob} value="All">
            All
          </option>
          <option onClick={switchCatMob} value="Article">
            Article
          </option>
          <option onClick={switchCatMob} value="Event">
            Event
          </option>
          <option onClick={switchCatMob} value="Education">
            Education
          </option>
          <option onClick={switchCatMob} value="Job">
            Job
          </option>
        </select>
      </div>
    </div>
  );
};

export default Categories;

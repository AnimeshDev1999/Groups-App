import React, { useState } from "react";

const Categories = (props) => {
  const [cate, setCate] = useState("All");
  const switchCat = (e) => {
    setCate(e.target.name);
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
          name="Art"
          className={cate === "Art" ? "cat-btn cat-active" : "cat-btn"}
        >
          Article
        </button>
        <button
          onClick={switchCat}
          name="Evn"
          className={cate === "Evn" ? "cat-btn cat-active" : "cat-btn"}
        >
          Event
        </button>
        <button
          onClick={switchCat}
          name="Edu"
          className={cate === "Edu" ? "cat-btn cat-active" : "cat-btn"}
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
          <option value="">All</option>
          <option value="">Article</option>
          <option value="">Event</option>
          <option value="">Education</option>
          <option value="">Job</option>
        </select>
      </div>
    </div>
  );
};

export default Categories;

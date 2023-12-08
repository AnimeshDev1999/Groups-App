import React, { useState } from "react";
import Navbar from "./components/Navbar";
import GroupHead from "./components/GroupHead";
import Categories from "./components/Categories";
import PostPane from "./components/PostPane";
import PostBtn from "./components/PostBtn";
import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Modal2 from "./components/Modal2";

function App() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  const [side, setSide] = useState(false);
  const flip = () => {
    setSide(!side);
  };

  const [joined, setJoined] = useState(false);
  const tog = () => {
    setJoined(!joined);
  };

  const [curCat, setCurCat] = useState("All");
  const changeCat = (name) => {
    setCurCat(name);
  };

  return (
    <div>
      <Backdrop state={open} func={toggle}></Backdrop>
      {side ? (
        <Modal2 state={open} func={toggle} func2={flip}></Modal2>
      ) : (
        <Modal state={open} func={toggle} func2={flip}></Modal>
      )}
      <Navbar func={toggle}></Navbar>
      <GroupHead state={joined} func={tog}></GroupHead>
      <Categories cat={changeCat} state={joined} func={tog}></Categories>
      <PostPane current={curCat} state={joined}></PostPane>
      <PostBtn func={toggle}></PostBtn>
    </div>
  );
}

export default App;

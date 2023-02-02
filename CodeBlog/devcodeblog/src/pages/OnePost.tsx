import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Carrocel from "../components/Carrocel";
import Post from "../components/Post";

function OnePost() {
  return (
    <div className="mx-auto xl:max-w-7xl md:w-fit">
      <Header />
      <Post />
    </div>
  );
}

export default OnePost;

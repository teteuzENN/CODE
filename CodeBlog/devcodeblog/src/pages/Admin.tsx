import React from "react";
import Header from "../components/Header";
import AllPosts from "../components/AllPosts";

function Admin() {
  return (
    <div className="mx-auto xl:max-w-7xl md:w-fit">
      <Header />
      <AllPosts />
    </div>
  );
}

export default Admin;

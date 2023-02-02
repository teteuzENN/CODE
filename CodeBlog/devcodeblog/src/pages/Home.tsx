import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Carrocel from "../components/Carrocel";

function Home() {
  return (
    <div className="mx-auto xl:max-w-7xl md:w-fit">
      <Header />
      <Hero />
      <Carrocel />
    </div>
  );
}

export default Home;

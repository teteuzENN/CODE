import React from "react";

function Hero() {
  return (
    <section className="flex px-4 pt-12 flex-col">
      <div className="text-left self-center">
        <h2 className="text-3xl font-bold">
          Minha jornada documentada para comunidade
        </h2>
        <p className="text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="self-start">
        <button className="bg-neutral-700 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded max-h-12 mr-4 mt-3">
          Posts
        </button>
        <button className="bg-neutral-700 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded max-h-12">
          Sobre
        </button>
      </div>
    </section>
  );
}

export default Hero;

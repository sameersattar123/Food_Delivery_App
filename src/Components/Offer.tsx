import Image from "next/image";
import React from "react";

const Offer = () => {
  return (
    <div className="bg-black flex flex-col md:flex-row h-screen md:justify-between md:h-[70vh]  md:bg-[url('/offerBg.png')]">
      <div className="flex-1 flex flex-col items-center justify-center text-center p-6 gap-8 ">
        <h1 className="text-white text-5xl md:text-6xl font-bold ">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white xl:text-xl ">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <button className="rounded-md bg-red-500 text-white px-6 py-3">
          Order Now
        </button>
      </div>
      <div className="relative w-full flex-1">
        <Image src="/offerProduct.png" alt="" fill />
      </div>
    </div>
  );
};

export default Offer;

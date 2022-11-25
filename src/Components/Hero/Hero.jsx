import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero_section ">
      <div className="left_body m-4 md:m-20 w-3/4 md:w-1/2 lg:w-2/5 ">
        <h3 className="text-xl text-white">IT'S EASY IT'S FREE</h3>
        <h1 className="text-3xl font-bold my-5 text-yellow-500">We provide On-Demand Live 1 on 1 Classes</h1>
        <p className="font-semibold text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo atque
          tempore eaque cumque consequuntur id minima unde eveniet adipisci!
          Sed.
        </p>
        <div className="flex items-center mt-5 ">
          <button className="bg-yellow-400  rounded-full font-semibold text-sm md:text-base border-2 border-yellow-400 mr-2 md:mr-10 py-1 px-2 md:py-2 md:px-5">
            Book a FREE Demo
          </button>
          <button className="bg-slate-900 border-2 border-yellow-400 text-yellow-400 py-1 px-2 md:py-2 md:px-5 rounded-full font-semibold text-sm md:text-base  ">
            Join as a Teacher
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

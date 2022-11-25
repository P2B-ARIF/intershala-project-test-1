import React from "react";
import "./Started.css";
import img from "./../../assets/image.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Started = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-medium my-5">Let's Get Started</h1>
      <div>
        <div className="md:flex">
          <p className="md:w-1/2 md:mr-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            doloremque quos assumenda error sit repellat saepe odit,
            necessitatibus facilis fugiat maiores veniam corporis beatae, nisi
            ipsum et, eius repudiandae modi. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quod, eaque.
          </p>
          <div className="rounded-3xl mt-2 md:w-1/2">
            <img src={img} alt="" className="rounded-3xl" />
          </div>
        </div>
        <p className="flex items-center my-2">
          Book a FREE Demo
          <div className="p-1 rounded-full ml-2 bg-yellow-400 inline-block">
            <AiOutlineArrowRight className="text-2xl " />
          </div>
        </p>
      </div>
      <div className="mt-20">
        <div className="md:flex">
          <div className="rounded-3xl mt-2 md:w-1/2 md:mr-5">
            <img src={img} alt="" className="rounded-3xl" />
          </div>
          <p className="md:w-1/2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            doloremque quos assumenda error sit repellat saepe odit,
            necessitatibus facilis fugiat maiores veniam corporis beatae, nisi
            ipsum et, eius repudiandae modi. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quod, eaque.
          </p>
        </div>
        <p className="flex items-center my-2  justify-end">
          Book a FREE Demo
          <div className="p-1 rounded-full ml-2 bg-yellow-400 inline-block">
            <AiOutlineArrowRight className="text-2xl " />
          </div>
        </p>
      </div>
    </div>
  );
};

export default Started;

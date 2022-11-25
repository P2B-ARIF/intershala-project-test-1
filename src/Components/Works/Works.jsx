import React from "react";
import "./Works.css";
import img from "./../../assets/image.png";
import {BsArrowRight} from 'react-icons/bs'

const Works = () => {
  return (
  <div>
      <div className="my-5 container mx-auto">
        <h1 className="my-3 text-2xl">For Students</h1>
      <div className="works_items md:flex md:items-center md:justify-between ">
        <div className="works_card mb-5 text-center flex flex-col justify-center">
          <div className="image w-[220px] h-[220px] rounded-full mx-auto overflow-hidden flex justify-center text-center">
            <img src={img} alt="" className="w-full h-full  object-cover inline-block" />
          </div>
          <p className="font-semibold">Browse Teachers</p>
        </div>
        <BsArrowRight   className="hidden md:block icon text-[150px]"/>
        <div className="works_card mb-5 text-center flex flex-col justify-center">
          <div className="image w-[220px] h-[220px] rounded-full mx-auto overflow-hidden flex justify-center text-center">
            <img src={img} alt="" className="w-full h-full object-cover inline-block" />
          </div>
          <p className="font-semibold">Browse Teachers</p>
        </div>
        <BsArrowRight  className=" hidden md:block icon text-[150px]"/>
        <div className="works_card text-center flex flex-col justify-center">
          <div className="image w-[220px] h-[220px] rounded-full mx-auto overflow-hidden flex justify-center text-center">
            <img src={img} alt="" className="w-full h-full object-cover inline-block" />
          </div>
          <p className="font-semibold">Browse Teachers</p>
        </div>
      </div>
      <a href="/" className="underline text-right flex justify-end">
        Learn More
      </a>
    </div>
    <div className="my-5 container mx-auto">
        <h1 className="my-3 text-2xl">For Teachers</h1>
      <div className="works_items md:flex md:items-center md:justify-between ">
        <div className="works_card mb-5 text-center flex flex-col justify-center">
          <div className="image w-[220px] h-[220px] rounded-full mx-auto overflow-hidden flex justify-center text-center">
            <img src={img} alt="" className="w-full h-full  object-cover inline-block" />
          </div>
          <p className="font-semibold">Browse Teachers</p>
        </div>
        <BsArrowRight   className="hidden md:block icon text-[150px]"/>
        <div className="works_card mb-5 text-center flex flex-col justify-center">
          <div className="image w-[220px] h-[220px] rounded-full mx-auto overflow-hidden flex justify-center text-center">
            <img src={img} alt="" className="w-full h-full object-cover inline-block" />
          </div>
          <p className="font-semibold">Browse Teachers</p>
        </div>
        <BsArrowRight  className=" hidden md:block icon text-[150px]"/>
        <div className="works_card text-center flex flex-col justify-center">
          <div className="image w-[220px] h-[220px] rounded-full mx-auto overflow-hidden flex justify-center text-center">
            <img src={img} alt="" className="w-full h-full object-cover inline-block" />
          </div>
          <p className="font-semibold">Browse Teachers</p>
        </div>
      </div>
      <a href="/" className="underline text-right flex justify-end">
        Learn More
      </a>
    </div>
  </div>
  );
};

export default Works;

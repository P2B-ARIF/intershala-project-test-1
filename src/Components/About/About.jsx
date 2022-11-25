import React from "react";
import "./About.css";
import image from "./../../assets/new image.png";

const About = () => {
  return (
    <div className="container mx-4 sm:mx-auto mb-20 md:flex ">
      <div className="w-full md:w-2/3 md:pr-5 mb-5">
        <h1 className="text-2xl font-medium mb-1">About Us</h1>
        <p className="my-4 py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          culpa quasi sed minima recusandae. Omnis culpa perferendis cupiditate
          architecto sequi blanditiis error veritatis dolorum iste suscipit,
          quisquam autem consequatur quia hic dolore, inventore perspiciatis
          ipsam quo dolorem. Ipsum nisi ad iusto quod pariatur cum consectetur
          totam, dolore, officia possimus harum fugiat ea odit? Vel ad fuga
          itaque, illo a impedit blanditiis earum ea quidem voluptas consequatur
          corrupti cupiditate recusandae facere quibusdam facilis. Modi
          veritatis sapiente praesentium corrupti. Quasi, doloremque nam.
        </p>
          <a href="/" className="text-blue-700">
            Learn More
          </a>
      </div>
      <div>
        <div className="relative">
          <div className="absolute w-20 h-20 bg-yellow-400 rounded-full"></div>
          <div className="absolute right-[50%] md:right-[0px] w-5 h-5 bg-yellow-400 rounded-full"></div>
          <div className="absolute right-[60%] md:right-[40px] top-6 w-10 h-10 bg-slate-800 rounded-full "></div>
          <div className="absolute right-[300px] md:right-[220px] top-[150px] md:top-[210px] w-8 h-8 bg-slate-800 rounded-full"></div>
          <div className="relative w-[250px] ">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

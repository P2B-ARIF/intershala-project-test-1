import React from "react";
import "./Choose.css";
import img from "./../../assets/image.png";

const Choose = () => {
  return (
    <div className="container mx-auto my-10 p-5 md:p-10 rounded-[2rem] bg-yellow-400 md:flex ">
      <div className=" rounded-[2rem] md:w-1/2">
        <img src={img} alt="" className="rounded-[2rem]" />
      </div>
      <div className="md:w-1/2 md:ml-10">
        <h1 className="font-medium text-2xl my-5">Why Choose Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus totam
          et provident, nobis tenetur sequi. Adipisci animi magnam omnis ab
          facere velit voluptas accusamus quis odit odio illum beatae expedita
          qui quae quod aut dolores amet, <br /> <br />
          modi, inventore consectetur voluptates. Ut necessitatibus error magnam
          pariatur, debitis earum impedit minus voluptate.
        </p>
      </div>
    </div>
  );
};

export default Choose;

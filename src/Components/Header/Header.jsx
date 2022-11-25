import React from "react";
import "./Header.css";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail, AiFillMessage } from "react-icons/ai";
import {BiMenuAltLeft} from 'react-icons/bi'

const Header = () => {
  return (
    <div>
      <nav className="container mx-auto py-5">
        <div className=" flex items-center justify-between">
          <h3 className="font-semibold text-2xl ml-3">Company</h3>
          <div className="flex items-center">
            <p className="bg-slate-300 rounded-full p-2 mx-3 cursor-pointer">
              <IoCallOutline className="text-2xl" />
            </p>
            <p className="bg-slate-300 rounded-full p-2 ml-3 mr-2 cursor-pointer">
              <AiOutlineMail className="text-2xl" />
            </p>
            <p className="md:block hidden  bg-slate-300 rounded-full p-2 ml-3 mr-2 cursor-pointer">
              <AiFillMessage className="text-2xl" />
            </p>
            <button className="bg-yellow-400 mx-5 py-2 px-4 rounded-full">
              Sign Up
            </button>
          </div>
        </div>
        <div className=" block md:hidden mt-5 border-t-2 border-slate-900">
       <div className="flex items-center justify-between mx-4">
       <BiMenuAltLeft className=" text-5xl"/>
        <AiFillMessage className=" text-4xl mr-2" />
       </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

import React from "react";
import "./Teacher.css";
import {BiSearch} from 'react-icons/bi'

const Teacher = () => {
  return (
    <div className="container mx-auto my-5 px-5 mb-20">
      <h1 className="font-semibold text-2xl">Browse Teachers at One Click</h1>
      <p className="my-5 sm:flex sm:items-center ">
        <span className="pr-5">I am a</span>
        <div className="flex items-center">
          <div className="flex items-center mr-5">
            <input id="student" type="radio" className="mr-2" />
            <label htmlFor="student">Student/Parent</label>
          </div>
          <div className="flex items-center">
            <input id="teacher" type="radio" className="mr-2" />
            <label htmlFor="teacher">Teacher</label>
          </div>
        </div>
      </p>
      <div className="  rounded-full">
       <div className="flex items-center">
       <h3 htmlFor="subject" className="w-1/2 ml-3 mb-1 text-sm font-medium">Subject</h3>
        <h3 htmlFor="subject" className="w-1/2 ml-3 mb-1 text-sm font-medium">Grade</h3>
       </div>

        <div className=" flex items-center bg-slate-300 rounded-full">
          <div className="w-1/2 ">
            <select name="" id="subject " className="w-full bg-slate-800 text-white  py-2 rounded-full px-2 ">
              <option value="" className="">Subject</option>
              <option value="">Subject</option>
              <option value="">Subject</option>
              <option value="">Subject</option>
            </select>
          </div>
          <div className="w-1/2  flex items-center">
            <select name="" id="subject" className="w-full focus:outline-none  py-2 rounded-full px-2 bg-slate-300">
              <option value="" className="pr-5 "></option>
              <option value="">Subject</option>
              <option value="">Subject</option>
              <option value="">Subject</option>
            </select>
            <p className="bg-slate-800 rounded-full  p-1"><BiSearch className="text-3xl text-yellow-400"/></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;

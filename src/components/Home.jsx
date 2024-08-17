import React from 'react'
import MyProfile from "../assets/me.jpg";

import { MdOutlineFileDownload } from "react-icons/md";


const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className=" flex flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-7xl font-bold text-white">
            Hi, I am Jayati Gupta!👋
          </h2>
          <p className=" text-gray-500 py-4 max-w-md">
            <br />
              Full Stack Developer living in Delhi, India.<br/>
              Currently i love to work on web applications using technologies like ReactJS, React Native, MongoDB, NodeJS, ExpressJS, Tailwind.
              <br />
              <br />
           </p>
          <div>
          
            <a href="/jayati_gupta_cv.pdf" className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer" download="Jayati Gupta CV" target='_blank' rel="noreferrer" >
              My Resume
              <span className="group-hover:cursor-pointer duration-300">
                <MdOutlineFileDownload size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
        <div>
          <img src={MyProfile} alt="my profile" className="rounded-2xl mx-auto w-3/4 md:w-100" />
        </div>
      </div>
    </div>
  );
};

export default Home
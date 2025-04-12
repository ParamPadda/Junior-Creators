import React from "react";
import img from "../assets/welcome.png";
import img3 from "../assets/bg1.jpg";
import img2 from "../assets/bg2.webp";
import img4 from "../assets/side.png";
const Welcome = () => {
  return (
    <>
      <div
        className="h-screen w-full bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${img4})`, 
          backgroundBlendMode:'darken',
          
        }}
      >
        {/* Content */}
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to Junior Creator
          </h1>
          <p className="text-2xl md:text-4xl  mb-6">"Big ideas start with small stories — write yours today."</p>
          <div className="flex  flex-col justify-center  items-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl shadow-lg cursor-pointer ">
              Log In
            </button>

            <button className="bg-white hover:bg-gray-200 text-blue-500 px-6 py-2 rounded-xl shadow-lg cursor-pointer border-1 border-blue-500">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;

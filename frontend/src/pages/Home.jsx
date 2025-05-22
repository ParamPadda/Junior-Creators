import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import homeBg from "../assets/homeBg.png";
// import Sidebar from "../components/Sidebar";
import Main from "../components/HomeMainSection";
import Footer from '../components/Footer'; 
import HomeMainSection from "../components/HomeMainSection";

const Home = () => {
  return (
    <>
     

       <div className="bg-[#FFFCF7] min-h-screen text-[#1A1A1A] w-screen">
      {/* <Navbar /> */}
      {/* <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col items-center text-center">
          <img
            src={homeBg}
            alt="Junior Creator Hero"
            className="w-[350px] md:w-2xl mb-6"
          />
          <h1 className="text-4xl font-bold  mb-6">Junior Creator</h1>
          <div className="flex gap-4 mb-8">
            <button className="bg-[#F0733F] hover:bg-[#e0632c] text-white px-6 py-2 rounded-xl cursor-pointer">
              Start Writing
            </button>
            <button className="px-6 py-2 rounded-xl border-gray-300 hover:bg-[#f1e9e6] cursor-pointer">
              Explore Blogs
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md p-6 rounded-xl mb-10">
          <h2 className="text-lg font-semibold mb-2">Featured Post</h2>
          <h3 className="text-xl font-bold mb-1">The Benefits of Daily Writing for Kids</h3>
          <p className="text-sm text-gray-600 mb-2">
            Discover how daily writing can improve children's creativity,
            critical thinking skills, and academic performance.
          </p>
          <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Read More</a>
        </div>

        <h2 className="text-xl font-semibold mb-4">Writing Prompts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#FCDDD3] p-4 rounded-xl">
            <h3 className="font-semibold text-lg mb-1">A Mysterious Adventure</h3>
            <p className="text-sm text-gray-700">Write a story about discovering a hidden world beneath your school.</p>
          </div>
          <div className="bg-[#EBF4D9] p-4 rounded-xl">
            <h3 className="font-semibold text-lg mb-1">The Future of Transportation</h3>
            <p className="text-sm text-gray-700">Describe how people might travel 50 years from now.</p>
          </div>
          <div className="bg-[#E4E8F7] p-4 rounded-xl">
            <h3 className="font-semibold text-lg mb-1">My Favorite Animal</h3>
            <p className="text-sm text-gray-700">Share why you love a particular animal and what makes it special.</p>
          </div>
        </div>
      </section> */}
      <HomeMainSection/>
    </div>

     

     
      
    </>
  );
};

export default Home;

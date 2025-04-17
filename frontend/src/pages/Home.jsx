import React from "react";
import { Link } from "react-router-dom";
import TrendingBlogs from "../components/TrendingBlogs"; // Assuming you already have this

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 text-white">
        <div className="flex justify-between items-center container mx-auto">
          <Link to="/" className="text-2xl font-semibold">
            Junior Creator
          </Link>
          <div className="bg-white w-2xl rounded-lg">
            <input type="search" placeholder="search" className="text-black"  />
          </div>
          <div>
            <Link to="/profile" className="mx-4">Profile</Link>
            <Link to="/about" className="mx-4">About</Link>
            <Link to="/contact" className="mx-4">Contact</Link>
          </div>
        </div>
      </nav>
  
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Junior Creator</h1>
        <p className="text-xl mb-8">Create, Share, and Explore Stories</p>
        <Link to="/create" className="bg-white text-blue-600 px-8 py-3 rounded-lg shadow-lg hover:bg-gray-200">
          Write Your First Blog
        </Link>
      </section>

      {/* Trending Blogs Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600">Trending Blogs</h2>
          <p className="text-lg text-gray-600">Check out the latest posts from Junior Creators</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4">
          <TrendingBlogs /> {/* my component for displaying trending blogs */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Junior Creator. All Rights Reserved.</p>
          <div className="mt-4">
            <Link to="/privacy" className="mx-4">Privacy Policy</Link>
            <Link to="/terms" className="mx-4">Terms of Service</Link>
          </div>
        </div>
      </footer>
      
    </>
  );
};

export default Home;

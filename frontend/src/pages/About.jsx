import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faPenNib, faUsers, faSmile } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="min-h-screen py-12 px-6 md:px-12 ">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8 space-y-12">

          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-purple-600 mb-4 animate-pulse">
              Welcome to <span className="text-blue-600">Junior Creator</span>! 
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Where young imaginations take flight and stories come to life! We're a special corner of the internet built just for junior creators like you – kids and teens under 18 with amazing ideas to share.
            </p>
            <img src="https://images.pexels.com/photos/213015/pexels-photo-213015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Creative Kids" className="mx-auto mt-6 rounded-lg shadow-md w-full md:w-2/3" />
          </div>

          {/* Our Motive Section */}
          <section className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-green-600 flex items-center gap-2 mb-3">
                <FontAwesomeIcon icon={faLightbulb} className="text-yellow-500" /> Our Bright Idea
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Junior Creator, we believe that every young mind is full of incredible stories, thoughts, and discoveries. Our motive is simple: to create a safe, fun, and encouraging space where you can:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong className="text-purple-500">Share Your Voice:</strong> Express your unique perspectives and passions through writing.</li>
                <li><strong className="text-blue-500">Get Creative:</strong> Unleash your imagination in countless creative ways.</li>
                <li><strong className="text-green-500">Connect:</strong> Be inspired by young creators in our friendly community.</li>
                <li><strong className="text-yellow-500">Learn & Grow:</strong> Develop your writing skills and build confidence.</li>
              </ul>
            </div>
            <img src="https://images.pexels.com/photos/7869245/pexels-photo-7869245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Imagination at Work" className="rounded-lg shadow-md" />
          </section>

          {/* More About Section */}
          <section className="grid md:grid-cols-2 gap-6 items-center">
  <img
    src="https://images.pexels.com/photos/3171118/pexels-photo-3171118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    alt="Writing Together"
    className="rounded-lg shadow-md"
  />
  <div>
    <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-2 mb-3">
      <FontAwesomeIcon icon={faPenNib} className="text-pink-500" /> More to Explore
    </h2>
    <p className="text-gray-600 leading-relaxed mb-4">
      At <span className="text-orange-500 font-semibold">Junior Creator</span>, we believe that every young voice deserves to be heard. 
      More than just a blogging platform, it's a vibrant creative space where students under 18 can discover, express, and shine.
    </p>
    <ul className="list-disc list-inside space-y-2 text-gray-600">
      <li>
        <strong className="text-orange-500">Safe & Sound:</strong> A carefully moderated space that prioritizes positivity, kindness, and safety in every post.
      </li>
      <li>
        <strong className="text-teal-500">Fun & Easy:</strong> Our kid-friendly interface lets anyone create and explore—no tech genius needed!
      </li>
      <li>
        <strong className="text-red-500">Learn Through Play:</strong> From writing games to creative prompts, every activity helps build skills in the most exciting way.
      </li>
      <li>
        <strong className="text-indigo-500">Grow With Us:</strong> Whether you're sharing your first story or leading a series, this space grows with your talent.
      </li>
      <li>
        <strong className="text-yellow-500">For Every Kid:</strong> Whether you're into fantasy, facts, or funny poems—your creativity matters here.
      </li>
    </ul>
  </div>
</section>


          {/* Join Us */}
          <div className="text-center mt-8">
            <h2 className="text-2xl font-semibold text-purple-600 flex items-center justify-center gap-2 mb-2">
              <FontAwesomeIcon icon={faUsers} className="text-blue-500" /> Ready to Sparkle?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Join our growing community of young writers and share your amazing creations!
            </p>
            <img src="https://images.pexels.com/photos/10674457/pexels-photo-10674457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Join Us" className="mx-auto mt-4 rounded-lg shadow-md w-full md:w-2/3" />
          </div>

          {/* Extra Smile */}
          <div className="text-center mt-10">
            <FontAwesomeIcon icon={faSmile} className="text-4xl text-yellow-400 animate-bounce" />
            <p className="text-sm text-gray-500 mt-2">
              We're so glad you're here! Happy creating!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faBookOpen, faBrain,
  
  
  faComments,
  faHeart,
  faStar, } from '@fortawesome/free-solid-svg-icons';

const WritingImp = () => {
  const notify = () => toast("Keep Writing! Your words matter! ✍️");

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-purple-100 via-white to-pink-100 p-4">
      <ToastContainer />
      
      {/* Hero Section */}
      <div className="relative w-full h-72 rounded-xl overflow-hidden mb-8 shadow-lg">
        <img
          src="https://images.pexels.com/photos/8472849/pexels-photo-8472849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="writing hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            The Power of Writing 
          </h1>
        </div>
      </div>

      {/* Writing Benefits */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-purple-700">Why Writing Matters</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">Writing helps express thoughts, build creativity, and enhance communication. Explore the impact of your words!</p>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
          <FontAwesomeIcon icon={faPenNib} className="text-4xl text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Boosts Creativity</h3>
          <p className="text-gray-500">Writing lets your imagination fly. It helps shape stories, characters, and worlds from your mind.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
          <FontAwesomeIcon icon={faBookOpen} className="text-4xl text-pink-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Improves Learning</h3>
          <p className="text-gray-500">When you write, you remember better. Notes, summaries, and reflections sharpen understanding.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
          <FontAwesomeIcon icon={faBrain} className="text-4xl text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Enhances Thinking</h3>
          <p className="text-gray-500">Writing helps organize thoughts. It promotes clear and logical communication and deep thinking.</p>
        </div>
        {/* Emotional Expression */}
  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
    <FontAwesomeIcon icon={faHeart} className="text-4xl text-red-500 mb-4" />
    <h3 className="text-xl font-semibold text-gray-800 mb-2">Expresses Emotions</h3>
    <p className="text-gray-500">Journaling and stories help children express feelings safely, leading to better emotional well-being.</p>
  </div>
      {/* Communication */}
  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
    <FontAwesomeIcon icon={faComments} className="text-4xl text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold text-gray-800 mb-2">Builds Communication</h3>
    <p className="text-gray-500">Through writing, kids learn to express their ideas clearly, improving how they communicate with others.</p>
  </div>
  {/* Confidence */}
  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
    <FontAwesomeIcon icon={faStar} className="text-4xl text-yellow-500 mb-4" />
    <h3 className="text-xl font-semibold text-gray-800 mb-2">Builds Confidence</h3>
    <p className="text-gray-500">Seeing their work come to life gives kids pride in their thoughts and words, boosting self-esteem.</p>
  </div>
      </div>

     
    </div>
  );
};

export default WritingImp;

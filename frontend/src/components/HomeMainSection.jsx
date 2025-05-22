import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg2 from "../assets/bg2.webp";


const HomeMainSection = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-[#FFFDF9] text-[#1E2A38] mt-6 mx-8">

      {/* Hero Section */}
      <section
        className="  relative h-[75vh] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center text-center px-6 mx-17 "
      
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0) 80%), url(${bg2})`,
        backgroundBlendMode: 'darken',
        borderRadius:"2rem"
      }}
      >
       
        <p className=" text-sm  md:text-3xl mb-6   px-4 py-2 rounded-md max-w-4xl text-white  ">
          Let your imagination run wild! Share your stories and explore blogs by creative young minds.
        </p>
        <div className="flex gap-4  text-lg">
          <button
            onClick={() => navigate('/createBlog')}
            className="bg-[#F0733F] hover:bg-[#e0632c] !text-white px-6 py-2 rounded-xl cursor-pointer"
          >
            + Create Blog
          </button>
          <button
            onClick={() => navigate('/home/exploreBlogs')}
            className="px-6 py-2 rounded-xl border-gray-300 bg-[#f1e9e6]  hover:bg-[#f5dbdb] cursor-pointer "
          >
            Explore Blogs
          </button>
        </div>
      </section>

       {/*  Featured Post */}
      <section className="mt-10 px-6">
      <div className="bg-white shadow-md p-6 rounded-xl mb-10">
          <h2 className="text-lg font-semibold mb-2">Featured Post</h2>
          <h3 className="text-xl font-bold mb-1">The Benefits of Daily Writing for Kids</h3>
          <p className="text-sm text-gray-600 mb-2">
            Discover how daily writing can improve children's creativity,
            critical thinking skills, and academic performance.
          </p>
          <span
  onClick={() => navigate('/home/importance-of-writing')}
  className="text-blue-600 hover:underline text-sm font-medium cursor-pointer"
>
  Read More
</span>

        </div>
      </section>

      {/* Writing Prompts (Horizontal Scroll) */}
      <section className="mt-10 px-6">
        <h2 className="text-2xl font-bold mb-4">Writing Prompts</h2>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-2">
          {['A Mysterious Adventure', 'The Future of Transportation', 'My Favorite Animal', 'The Day I Met an Alien'].map((title, i) => (
            <div key={i} className="min-w-[250px] bg-[#F9FAFB] p-4 rounded-xl shadow-md hover:shadow-lg flex-shrink-0">
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-gray-600">Write your creative version of this prompt.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Informational Cards Section */}
      <section className="mt-14 px-6">
        <h2 className="text-2xl font-bold mb-6">Explore More</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div
  onClick={() => navigate('/home/importance-of-writing')}
  className="cursor-pointer bg-[#FFF7ED] p-5 rounded-xl shadow hover:shadow-xl transition-transform duration-300 hover:scale-[1.03]"
>
  <h3 className="text-xl font-semibold mb-2">✍️ Importance of Writing</h3>
  <p className="text-sm text-gray-700">Discover how writing improves creativity, memory, and critical thinking.</p>
</div>

          {/* Card 2 */}
          <div
  onClick={() => navigate('/home/learning')}
  className="cursor-pointer bg-[#FFF7ED] p-5 rounded-xl shadow hover:shadow-xl transition-transform duration-300 hover:scale-[1.03]"
>
            <h3 className="text-xl font-semibold mb-2">📚 Learning Corner</h3>
            <p className="text-sm text-gray-700">Explore grammar games, vocabulary builders, and more fun learning tools.</p>
          </div>
          {/* Card 3 */}
          <div
  onClick={() => navigate('/home/fun-activities')}
  className="cursor-pointer bg-[#FFF7ED] p-5 rounded-xl shadow hover:shadow-xl transition-transform duration-300 hover:scale-[1.03]"
>
            <h3 className="text-xl font-semibold mb-2">🧩 Fun Activities</h3>
            <p className="text-sm text-gray-700">Word puzzles, comic-making, and storytelling challenges await you!</p>
          </div>
          {/* Card 4 (New Feature!) */}
          <div
  onClick={() => navigate('/home/tasks')}
  className="cursor-pointer bg-[#FFF7ED] p-5 rounded-xl shadow hover:shadow-xl transition-transform duration-300 hover:scale-[1.03]"
>
            <h3 className="text-xl font-semibold mb-2">Daily Task</h3>
            <p className="text-sm text-gray-700">Join our challenge and get featured on the Most Liked Blog section  every week!</p>
          </div>
        </div>
      </section>

    </main>
  );
};

export default HomeMainSection;

// 
import React, { useState, useEffect,useRef } from 'react';
import { useNavigate ,Link } from 'react-router-dom';
import '../cssfiles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBars, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
 
 


  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  /// logout fuctionality 
  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    
    navigate("/"); // redirect to welcome page 
    console.log("Logged out successfully");
  };
  

  return (
    <>
      {/* Navbar */}
      <nav id="navbar" className='flex justify-between  pt-6 items-center h-[9vh] bg-[#FFFDF9] w-full px-6 md:px-10 text-[#1E2A38] shadow-md z-20 '>
        <div className="flex items-center  gap-10  text-2xl ">
          <button onClick={toggleSidebar} className='cursor-pointer pb-4'>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <p className='flex items-center gap-2 font-bold'>
            <FontAwesomeIcon icon={faGraduationCap} />
            Junior Creator
          </p>
        </div>

       <div className="center">
       <ul className='hidden lg:flex gap-8 items-center font-medium text-xl'>
          <Link to='/home' className='cursor-pointer hover:underline decoration-solid' id="navbar-home">Home</Link>
          <Link to='/home/exploreBlogs' className='cursor-pointer hover:underline decoration-solid'id="navbar-blogs" >Blogs</Link>
          <Link to="/home/about" className='cursor-pointer hover:underline decoration-solid' id="navbar-about">About</Link>
          <Link to='/home/quiz' className='cursor-pointer hover:underline decoration-solid' id="navbar-quiz">Quiz Zone</Link>
          <Link to='/home/tasks' className='cursor-pointer hover:underline decoration-solid' id="navbar-tasks">Daily Tasks</Link>
          </ul>
       </div>
           {/* Profile Dropdown */}
           <div className='relative pb-4 mr-6' ref={dropdownRef}>
            <div
              onClick={toggleDropdown}
              className='w-10 h-10  flex justify-center items-center border border-[#1E2A38] rounded-full cursor-pointer hover:bg-[#1E2A38] hover:text-white'
            >
              <FontAwesomeIcon size="lg" icon={faUser} />
            </div>

            {dropdownOpen && (
              <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2 z-40'>
                <ul className='flex flex-col gap-2 text-base text-[#1E2A38]'>
                  <Link to="/home/dashboard" className='hover:text-orange-500 cursor-pointer'>Dashboard</Link>
                  <li   className='hover:text-orange-500 cursor-pointer'>My Blogs</li>
   

                  <li onClick={handleLogout} className='hover:text-orange-500 cursor-pointer'>Logout</li>

                </ul>
              </div>
            )}
          </div>
      
      </nav>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='flex justify-between items-center p-5 border-b'>
          <p className='font-bold text-lg pt-5'>Menu</p>
          <button className='cursor-pointer' onClick={toggleSidebar}><FontAwesomeIcon size='lg' icon={faTimes} /></button>
        </div>
        <ul className='flex flex-col gap-5 p-6 text-[#1E2A38]'>
          <Link to='/home' className='cursor-pointer  hover:border-1 border-[#1E2A38] rounded p-1 transition-transform transform hover:scale-105'>Home</Link>
          <Link to="/home/about" className='cursor-pointer   hover:border-1 border-[#1E2A38] rounded p-1 transition-transform transform hover:scale-105'>About</Link>
          <Link  to='/home/tasks' className='cursor-pointer   hover:border-1 border-[#1E2A38] rounded p-1 transition-transform transform hover:scale-105'>Daily Tasks</Link>
          <Link  to='/home/quiz' className='cursor-pointer   hover:border-1 border-[#1E2A38] rounded p-1 transition-transform transform hover:scale-105'>Quiz Zone</Link>
          <Link to='/home/learning' className='cursor-pointer   hover:border-1 border-[#1E2A38] rounded p-1 transition-transform transform hover:scale-105'>Learning Corner</Link>
          <Link to='/home/exploreBlogs' className='cursor-pointer   hover:border-1 border-[#1E2A38] rounded p-1 transition-transform transform hover:scale-105'>Explore Blogs</Link>
          <Link to="/home/dashboard" className='cursor-pointer   hover:border-1 border-[#1E2A38] rounded p-1 transition-transform transform hover:scale-105'>Profile Dashboard</Link>
        </ul>
        <div  className=' p-3  bg-orange-500 cursor-pointer hover:bg-orange-600 inline-block ml-3 rounded text-white'>
          <button onClick={() => navigate('/createBlog')} className='cursor-pointer'>+ Create blog</button>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && <div onClick={toggleSidebar} className="fixed inset-0  z-20 md:hidden"></div>}
    </>
  );
};

export default Navbar;

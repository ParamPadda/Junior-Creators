import React from 'react'

const Navbar = () => {
  return (
    <>
    {/* <div className="navbar flex justify-around items-center  mx-4 mt-2 bg-sidebar rounded-4xl">
   <div className='flex justify-evenly gap-15 ml-0'>
    <h2 className='text-3xl text-text font-medium p-2 m-1 ml-0.5'>Junior Creators</h2>
    <input type="search" placeholder='Search..' className='rounded border-1  w-xl p-1 m-3' />
   </div>
   <div className="flex justify-evenly gap-7">
   <button className='text-xl text-text font-medium'>Login</button>
       <p className='text-xl text-text font-medium'>SignUp</p>
       <p className='text-xl text-text font-medium'>profile</p>
   </div>
   </div> */}

<div className="navbar flex items-center justify-between  py-3 bg-amber-200">
  <h1  className='ml-5  bg-red-200 text-3xl font-bold'>Junior Creators</h1>
  <input type="search" placeholder="Search Blogs here..." className='w-2xl bg-white py-2 rounded-3xl px-4' />
  <div className="right flex gap-5 mx-5">
     <span>Sign In</span>
    <span>Sign Up</span>
</div>
</div>



   </>
  )
}

export default Navbar
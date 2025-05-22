import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <>
    <Navbar/>
    <main className='h-full my-3'>
    <Outlet />
    </main>
    <Footer/>
    </>
  )
}

export default Layout
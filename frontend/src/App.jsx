import { useState } from 'react'
import {  Routes, Route } from "react-router-dom";
import './App.css'


import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import TrendingBlogs from './components/TrendingBlogs';
import Welcome from './pages/Welcome';
import Home from './pages/Home';


function App() {
 

  return (
    <>
    

   <Routes>
    <Route path='/' element={<Welcome/>}/>
    <Route path='/home' element={<Home/>}/>
   </Routes>
    </>
  )
}

export default App

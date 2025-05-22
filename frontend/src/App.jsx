import { useState } from 'react'
import {  Routes, Route } from "react-router-dom";

import './App.css'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import TrendingBlogs from './components/TrendingBlogs';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import CreateBlog from './pages/CreateBlog';
import ExploreBlogs from './pages/ExploreBlogs';
import About from './pages/About';
import Quiz from './pages/Quiz';
import Dashboard from './pages/Dashboard';
import DailyTask from './components/DailyTask';
import Layout from './pages/Layout';
import LearningCorner from './pages/LearningCorner';
import WritingImp from './components/WritingImp';
import WeeklyChallenge from './components/WeeklyChallenge';
import FunActivities from './components/FunActivities';


 const App =()=> {
 

  return (
    <>
    

   <Routes>

   <Route path='/' element={<Welcome/>}/>
   <Route path='/home' element={<Layout/>}>
    <Route index element={<Home />} />


    {/* <Route path='/home' element={<Home/>}/> */}
   
    <Route path='exploreBlogs' element={<ExploreBlogs/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='quiz' element={<Quiz/>}/>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path='tasks' element={<DailyTask/>}/>
    <Route path='learning' element={<LearningCorner/>}/>
    <Route path="importance-of-writing" element={<WritingImp />} />

<Route path="fun-activities" element={<FunActivities />} />
<Route path="weekly-challenge" element={<WeeklyChallenge />} />




     </Route>
     <Route path='createBlog' element={<CreateBlog/>}/>
   </Routes>


<ToastContainer />
    </>
  )
};

export default App

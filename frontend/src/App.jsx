import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Home from './pages/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import TrendingBlogs from './components/TrendingBlogs';
import Welcome from './pages/Welcome';

function App() {
 

  return (
    <>
   <Welcome/>
    </>
  )
}

export default App

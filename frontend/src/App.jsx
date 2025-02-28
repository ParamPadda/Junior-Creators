import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Home from './pages/Home';
import Login from './components/Login';

function App() {
 

  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Home/>}/>
    </Routes>
      <p class="text-3xl font-bold underline">felo</p>
    </>
  )
}

export default App

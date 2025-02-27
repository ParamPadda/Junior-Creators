import { useState } from 'react'
import { Routes,Route } from 'react-router'
import './App.css'
import Home from './pages/Home'

function App() {
 

  return (
    <>
    <p>App</p>
     <Routes>
      <Route path="/home" element={<Home/>}/>
      {/* <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/> */}
     </Routes>
    </>
  )
}

export default App

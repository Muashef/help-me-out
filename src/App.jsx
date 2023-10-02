import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Auth from './pages/Auth';
import Video from './pages/Video';

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='auth' element={<Auth />} />
      <Route path='/video' element={<Video />} />
     </Routes>
    </>
  )
}

export default App

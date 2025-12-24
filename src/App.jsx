import './App.css'
import Navigation from './Components/Navigation'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Service from './Components/Pages/Service'
import Team from './Components/Pages/Team'
import Contact from './Components/Pages/Contact'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/service" element={<Home />} />
      <Route path="/team" element={<Home />} />
      <Route path="/contact" element={<Home />} />
    </Routes>
  )
}

import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Footer from './components/Footer'
import Kurslar from './pages/Kurslar'

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/About" element={<About/>}/>
        <Route path="/Kurslar" element={<Kurslar/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

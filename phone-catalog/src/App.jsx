import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import PhonesCatalog from './pages/PhonesCatalog'

function App() {

  

  return (
    <>
    <Routes>
      <Route path="/" element={<PhonesCatalog />}/>
    </Routes>
    </>
  )
}

export default App

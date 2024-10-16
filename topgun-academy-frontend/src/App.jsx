import { useState } from 'react'
import { motion } from "framer-motion"
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path ='/' element={<HomePage />} />
        </Routes>
    </BrowserRouter>


    </>
  )
}

export default App
import HomePage from './pages/HomePage/HomePage'
import ContactPage from './pages/ContactPage/ContactPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      {<Header />}
        <Routes>
          <Route path ='/' element={<HomePage />} />
          <Route path="/register" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path ='/contact' element={<ContactPage />} />


        </Routes>
      {<Footer />}
    </BrowserRouter>



    </>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Pages
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Everything from './Pages/Everything'
import Womens from './Pages/Womens'
import Men from './Pages/Men'
import Accessories from './Pages/Accessories'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Footer from './Pages/Footer'

function App() {

  return (
    <> 
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/everything' element={<Everything/>}/>
          <Route path='/womens' element={<Womens/>}/>
          <Route path='/men' element={<Men/>}/>
          <Route path='/accessories' element={<Accessories/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product' element={<Product/>}/>
        </Routes>
        <Footer/>
      </Router>
        
    </>
  )
}

export default App

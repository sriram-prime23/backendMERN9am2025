import { useState } from 'react'
import { Link, Routes, Route, Outlet } from 'react-router'
import Home from './components/Home'
import Contact from './components/Contact'
import Login from './components/Login'
import About from './components/About'
import { PageNotFound } from './components/PageNotFound'

function App() {


  return (
    <>
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          MyApp
        </div>

        {/* Links */}
        <div className="space-x-6">
          <Link 
            to="/" 
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
          <Link 
            to="/login" 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Outlet></Outlet>

    </>
  )
      
}

export default App

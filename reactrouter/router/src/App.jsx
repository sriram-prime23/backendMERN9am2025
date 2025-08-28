import { useState } from 'react'
import { Link, Routes, Route, Outlet } from 'react-router'
import Home from './components/Home'
import Contact from './components/Contact'
import Login from './components/Login'
import About from './components/About'
import { PageNotFound } from './components/PageNotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>|{" "}
        <Link to="contact">Contact</Link>|{" "}
        <Link to="login">Login</Link>
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

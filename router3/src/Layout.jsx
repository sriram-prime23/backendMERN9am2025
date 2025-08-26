import React from 'react'
import {Outlet, Link} from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"


function Layout() {
  return (


    <>

    <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        

        
    </nav>



<Header/>
<main>
    <Outlet></Outlet>
</main>
<Footer/>

   
    </>
    
  )
}

export default Layout
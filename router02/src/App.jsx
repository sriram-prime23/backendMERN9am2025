import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"
import Dashboard from "./component/Dashboard"
import Profile from "./component/profile"
import Settings from "./component/Settings"



import {Link , Routes , Route} from "react-router-dom"

import './App.css'

function App() {

  return (    
    <>
<nav>
  <Link to="/">Home</Link> | <Link to="about">About</Link> | {" "}
  <Link to="contact">Contact</Link> | {" "}
  <Link to="dashboard">Dashboard</Link>
</nav>

<Routes >
  <Route path="/" element={<Home />}/>
  <Route path="/about" element={<About />}/>
  <Route path="/contact" element={<Contact />}/>
  <Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile/>}/>
  <Route path="settings" element={<Settings/>}/>
  </Route>
</Routes>







    </>
  )
}

export default App

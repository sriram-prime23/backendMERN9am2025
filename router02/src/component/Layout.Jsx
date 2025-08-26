import { Link , Outlet } from "react-router-dom";    



export default function Layout(){


    return (
        <div>


<nav>
  <Link to="/">Home</Link> | <Link to="about">About</Link> | {" "}
  <Link to="contact">Contact</Link> | {" "}
  <Link to="dashboard">Dashboard</Link>
</nav>

        </div>
    )

}
import { Link , Outlet } from "react-router-dom";    



export default function Layout(){


    return (
        <div>

            <nav style={{display: "flex" , gap:"10px", marginBottom:"20px", }}>


                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
                <Link to ="profile">Profile</Link>

            </nav>



        
                <Outlet>

                </Outlet>




        </div>
    )

}
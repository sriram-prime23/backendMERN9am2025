import { useState } from "react";




export default function App(){

    let isActive = true
    const [active , setActive] = useState(false)
    return (
        <div style={{padding:"20px"}}>
            <button 
            onClick={()=> setActive(!active)}
            className={active ? "btn-active": "btn-inactive"}>
                {isActive ? "Active" : "Inactive"}
            </button>
        </div>
    )
}
//import {Postitem} from "../componant/Postitem"
import { useEffect, useState } from "react"
import {Link, Outlet} from "react-router-dom"
import Story from "../component/allstory"
 const Homepage=()=>{
    
    return(
        <div>
            <h1>Home page</h1>
           <div style={{width:"95%", display:"flex", justifyContent:"space-around", paddingLeft:"70px",paddingRight:"70px"} }>  
            
            <Link to="/">Home</Link>
            <Link to="/mystory">My Story</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Signup</Link>
            <Link to ="/login">Logout</Link>
      
           </div>
      <div>
        <Story/>
      </div>
            
            
        </div>
    )
}
export default Homepage
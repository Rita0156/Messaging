//import {Postitem} from "../componant/Postitem"
import { useEffect, useState } from "react"
import {Link, Outlet} from "react-router-dom"
import Story from "../component/allstory"
import ItemPage from "../component/Item"
 const Homepage=()=>{
  const [posts,setPos]=useState([])
  const token=localStorage.getItem("app_token")
  const data=()=>{
    fetch("http://localhost:7000/story",{
        method:"GET",
        headers: { "Authorization": `Bearer ${token}`}
    }
    )
    .then((req)=>{
        return req.json()
    })
    .then((res)=>{
        console.log(res)
        setPos(res)
    })

   
}
useEffect(()=>{
  data()
},[])
    return(
        <div>
            <h1>Home page</h1>
           <div style={{width:"95%", display:"flex", justifyContent:"space-around", paddingLeft:"70px",paddingRight:"70px"} }>  
            
            <Link to="/">Home</Link>
            <Link to="/mystory">My Story</Link>
            
            <Link to ="/login">Logout</Link>
      
           </div>
      <div>
        {posts.map((item)=>
        <ItemPage user={item.name} massage={item.massage} avatar={item.image} time={item.time}/>
         )}
      </div>
            
            
        </div>
    )
}
export default Homepage
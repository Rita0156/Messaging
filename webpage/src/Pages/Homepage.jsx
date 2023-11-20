//import {Postitem} from "../componant/Postitem"
import { useEffect, useState } from "react"
import {Link, Navigate, Outlet} from "react-router-dom"
//import Story from "../component/allstory"
//import { Navigate } from "react-router-dom"
import "./homepage.css"
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
if(token==null){

}

        if (!token) {
            return <Navigate replace to="/login" />;
        }
        else
        return(
        <div>
            <h1>Home page</h1>
           <div className="navbar">  
            
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/">Home</Link>
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/mystory">My Story</Link>
            
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to ="/login">Logout</Link>
      
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
// {posts.forEach((item)=>
//     <ItemPage user={item.name} massage={item.massage} avatar={item.image} time={item.time}/>
//      )}
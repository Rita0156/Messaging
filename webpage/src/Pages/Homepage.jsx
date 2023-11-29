//import {Postitem} from "../componant/Postitem"
import { useEffect, useState } from "react"
import {Link, Navigate} from "react-router-dom"
//import Story from "../component/allstory"
//import { Navigate } from "react-router-dom"
import "./homepage.css"
import ItemPage from "../component/Item"
 const Homepage=()=>{
  const [posts,setPos]=useState([])
  let token=localStorage.getItem("app_token")
   const handaiOut=()=>{
    token=null
    localStorage.setItem("app_token",token)
    alert("Log Out")
   }
  const data=async()=>{
    console.log("fetching req")
   await fetch("https://mini-app-h1b8.onrender.com//story",{
        method:"GET",
        headers: { "Authorization":`Bearer ${token}`}
    }
    )
    .then((req)=>{
        console.log(req)
        return req.json()
    })
    .then((res)=>{
        console.log(res,"res")
        setPos(res)
    })

   
}
useEffect(()=>{
  data()
},[])


        if (!token) {
            return <Navigate replace to="/login" />;
        }
        else
        return(
        <div>
            <h1>Home page</h1>
           <div className="navbar">  
            
            <Link className="lnk" style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/">Home</Link>
            <Link className="lnk" style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/mystory">My Story</Link>
            
            <Link className="lnk" onClick={handaiOut} style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to ="/login">Logout</Link>
      
           </div>
      
           <div className="home">
           {posts.length>0 && posts.map((item)=>
                 <ItemPage key={item._id} user={item.name} massage={item.massage} avatar={item.Image} time={item.time}/>
             )}
           </div>
     
            
            
        </div>
    )
}
export default Homepage
// {posts.forEach((item)=>
//     <ItemPage user={item.name} massage={item.massage} avatar={item.image} time={item.time}/>
//      )}
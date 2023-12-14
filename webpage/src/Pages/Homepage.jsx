//import {Postitem} from "../componant/Postitem"
import { useEffect, useState } from "react"
import {Link, Navigate} from "react-router-dom"
//import Story from "../component/allstory"
//import { Navigate } from "react-router-dom"
import "./homepage.css"
import ItemPage from "../component/Item"
 const Homepage=()=>{
    
  const [posts,setPos]=useState([])
  //const [isLoading,setLoding]=useState(true)
  let token=localStorage.getItem("app_token")
  var user_name=localStorage.getItem("user_name")
  console.log(user_name)
  //setName(user_name.name)
   const handaiOut=()=>{
    token=null
    user_name=""
    localStorage.setItem("app_token",token)
    localStorage.setItem("user_name",JSON.stringify(user_name))
    alert("Log Out")
   }
  const data=async()=>{
    console.log("fetching req")
    //setLoding(true)
   await fetch("https://insta-app-4i97.onrender.com/story",{
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
        //setLoding(false)
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
             <h2 style={{color:"white",backgroundColor:"transparent"}}>User: {user_name}</h2>
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
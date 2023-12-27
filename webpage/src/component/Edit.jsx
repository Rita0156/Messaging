//import axios from "axios"
//import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./edit.css"
export default function Edit({props}){
   // event.preventDefault()
   console.log(props,"props of edit")
    //const id=props.id
   // const [name,setname]=useState("")
    const [massage,setMassage]=useState("")
    //const [time,setTime]=useState("")
    const token=localStorage.getItem("app_token")
    const handalUpload=(e)=>{
        e.preventDefault()
        const payload={
           // name,
            massage
            //time
        }
        
            fetch(`http://localhost:7000/update/`,{
                method:"PATCH",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body:JSON.stringify(payload)
            })
            .then((req)=>req.json())
            .then((res)=>console.log(res));
        
    }
   
    return (
        <div>
            <div className="navbar">
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/">Home</Link>
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/mystory">My Story</Link>
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/login">Login</Link>
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/register">Signup</Link>
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to ="/login">Logout</Link>
            </div>
            <form onSubmit={handalUpload} >
                <h1>Update The story</h1>
            <div style={{width:"30%",margin:"auto",border:"2px solid white",padding:"20px",marginBottom:"20px"}} >
             
             <input style={{fontSize:"17px",width:"50%",marginBottom:"10px"}} type="text" onChange={(e)=>{setMassage(e.target.value)}} placeholder="enter message" /><br/>
            
            
            <input style={{backgroundColor:"green", color:"white", border:"2px solid white",fontWeight:"bold",padding:"4px",marginTop:"15px"}} type="submit" value="Update"/> 
            </div>
           </form>
           <Link style={{color:"white"}} to="/mystory">Go Back</Link>
        </div>
    )
}
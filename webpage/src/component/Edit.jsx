import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./edit.css"
export default function Edit(id){
   // event.preventDefault()
    const [name,setname]=useState("")
    const [massage,setMassage]=useState("")
    const [time,setTime]=useState("")
    const token=localStorage.getItem("app_token")
    const handalUpload=(e)=>{
        e.preventDefault()
        const payload={
            name,
            massage,
            time
        }
        
            fetch(`http://localhost:7000/update/${id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body:JSON.stringify(payload)
            })
            .then((req)=>req.json())
            .then((res)=>console.log(res))
        
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
            <form onSubmit={handalUpload} action="/stats" enctype="multipart/form-data" method="post">
                <h1>Update The story</h1>
            <div style={{width:"30%",margin:"auto",border:"2px solid white",padding:"20px",marginBottom:"20px"}} class="form-group">
             
             <input style={{fontSize:"17px",width:"50%",marginBottom:"10px"}} type="text" onChange={(e)=>{setMassage(e.target.value)}} class="form-control" placeholder="enter message" /><br/>
            <input style={{fontSize:"17px",width:"50%",marginBottom:"10px"}} type="text" onChange={(e)=>{setname(e.target.value)}} placeholder="enter name" /> <br/>
            <input style={{fontSize:"17px",width:"50%"}}  type="date" placeholder="select time"  onChange={(e)=>{setTime(e.target.value)}} /><br/>
            
            <input style={{backgroundColor:"green", color:"white", border:"2px solid white",fontWeight:"bold",padding:"4px",marginTop:"15px"}} type="submit" value="Update" class="btn btn-default"/> 
            </div>
           </form>
           <Link style={{color:"white"}} to="/mystory">Go Back</Link>
        </div>
    )
}
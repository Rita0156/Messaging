import { useEffect, useState } from "react"
import axios from "axios"
import {  Link, Navigate} from "react-router-dom"
import "./createstory.css"
export default function CreateStory(){
    const token=localStorage.getItem("app_token")
    
    const [name,setName]=useState("")
    const [massage,setMassage]=useState("")
    const [image,setImage]=useState("")
    const [time,setTime]=useState("")
    //const []=useState("")
   
  
   const handalSubmit=()=>{
   // event.preventDefault()
    
       
    //console.log(formdata,"formdata");
        
    let payload={
        name,
        massage,
        time,
        
    }
    
    //formdata.append("file",payload)
    console.log(payload,"payload")
         fetch("http://localhost:7000/create",{
            method:"POST",
            headers: { "Authorization":`Bearer ${token}`},
            body:JSON.stringify(payload)

          })
          .then((req)=>{return req.json()})
          .then((res)=>console.log(res))
        .catch(err=>console.log(err))

        alert("Post Created Successfully")
        

        
   }
   

   if (!token) {
    return <Navigate replace to="/login" />;
}
else

    return (
        <div className="cont">
            <div className="navbar">  
            
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/">Home</Link>
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/mystory">My Story</Link>
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/login">Login</Link>
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/register">Signup</Link>
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to ="/login">Logout</Link>
      
           </div>
            
            <div style={{border:"2px solid white",width:"30%",margin:"auto",padding:"30px",color:"white",marginBottom:"20px"}}  >
            <div className="inp">
            <h2 >Create Story</h2>
             
            <input style={{fontSize:"17px"}} type="text" placeholder="enter post name" onChange={(e)=>{setName(e.target.value)}} /> <br/>
            <input style={{fontSize:"17px"}} type="text"  placeholder="enter message" onChange={(e)=>{setMassage(e.target.value)}} /><br/>
            <input style={{fontSize:"17px"}}  type="date" placeholder="select time"  onChange={(e)=>{setTime(e.target.value)}} /><br/>
            <div className="image">
               <input style={{marginLeft:"50px"}} type="file" placeholder="upload image" onChange={(e)=>{setImage(e.target.files[0])}}/><br/>
               
            </div>
           
            <button className="btn" onClick={handalSubmit}>Post</button>
            </div>
           </div>
           <Link style={{color:"white"}} to="/mystory">Go Back</Link>
           
        </div>
    )
    };

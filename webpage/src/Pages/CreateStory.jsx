import { useEffect, useState } from "react"
import axios from "axios"
import {  Link, Navigate} from "react-router-dom"
import "./createstory.css"
export default function CreateStory(){
    const token=localStorage.getItem("app_token")
    
    const [name,setName]=useState("")
    const [massage,setMassage]=useState("")
    const [image,setImage]=useState("")
    
   const imagePreview=(e)=>{
         console.log(e)

         var render=new FileReader()
         render.readAsDataURL(e.target.files[0])
         render.onload=()=>{
             console.log(render.result)
             setImage(render.result)
         }
         render.onerror=err=>{
            console.log("error",err);
         }
   }
   const handalSubmit=()=>{
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+ today.getFullYear()
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const newTime=date+" "+time
      fetch('http://localhost:7000/image_upload',{
        method:"POST",
        crossDomain:true,
        headers:{
            "Authorization":`Bearer ${token}`,
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
            },
        body:JSON.stringify({name,massage,base64:image,time:newTime})
      })
      .then((req)=>{return req.json()})
      .then((res)=>{
        console.log(res);
        if(res.Status=="ok"){
            alert("Post Created Successfully")
        }else{
            alert("something went wrong please try again")
        }
       })
      .catch((err)=>{console.log(err);})
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
            
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to ="/login">Logout</Link>
      
           </div>
            
            <div style={{border:"2px solid white",width:"30%",margin:"auto",padding:"30px",color:"white",marginBottom:"20px"}}  >
            <div className="inp">
            <h2 >Create Story</h2>
             
            <input style={{fontSize:"17px"}} type="text" placeholder="enter post name" onChange={(e)=>{setName(e.target.value)}} /> <br/> 
            <input style={{fontSize:"17px"}} type="text"  placeholder="enter message" onChange={(e)=>{setMassage(e.target.value)}} /><br/>
            
            <div className="image">
               <input style={{marginLeft:"50px"}} accept="image/*" type="file"  onChange={imagePreview}/><br/>
               {/* <button onClick={uploadImage}>Upload</button>*/}
               <div>
                   {image==""?"":<img src={image} style={{width:"60px",height:"60px"}} />}
               </div>
            </div>
           
            <button className="btn" onClick={handalSubmit}>Post</button>
            </div>
           </div>
           <Link style={{color:"white"}} to="/mystory">Go Back</Link>
           
        </div>
    )
    };

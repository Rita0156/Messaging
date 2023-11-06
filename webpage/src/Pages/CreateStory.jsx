import { useEffect, useState } from "react"
import axios from "axios"
import {  Link, Navigate} from "react-router-dom"
export default function CreateStory(){
    const token=localStorage.getItem("app_token")
    if(token==null){
        <Navigate to="/login" replace={true} />
     }
    const [name,setName]=useState("")
    const [massage,setMassage]=useState("")
    const [image,seImage]=useState("")
    const [time,setTime]=useState("")
    //const []=useState("")
  
   const handalSubmit=(event)=>{
    event.preventDefault()
    const formdata=new FormData()
        formdata.append("file",image)
    const payload={
        name,
        massage,
        formdata,
        time
    }
        const fetchData= ()=>{ fetch("http://localhost:7000/upload",{
            method:"POST",
            headers:{
                "content-type":"application/json",
                "authorazation":"bearer"+" "+ token
            },
            body:JSON.stringify(payload)
          })
          .then((req)=>{return req.json()})
          .then((res)=>console.log(res))
        .catch(err=>console.log(err))
        }

        
   }
   

  

    return (
        <div>
            
            <form style={{border:"2px solid black",width:"30%",margin:"auto",padding:"30px"}} onSubmit={handalSubmit} action="/stats" enctype="multipart/form-data" method="post">
            <div style={{width:"80%",margin:"auto"}} class="form-group">
            <h2 >Create Story</h2>
             
            <input type="text" placeholder="enter name" onChange={(e)=>{setName(e.target.value)}} /> <br/>
            <input type="text"  placeholder="enter message" onChange={(e)=>{setMassage(e.target.value)}} /><br/>
            <input  type="date" placeholder="select time"  onChange={(e)=>{setTime(e.target.value)}} /><br/>
            <input style={{marginLeft:"50px"}} type="file" placeholder="upload image" onChange={(e)=>{seImage(e.target.files[0])}}/><br/>
           
            <input style={{backgroundColor:"green", color:"white", border:"none",fontWeight:"bold",padding:"4px",marginTop:"15px"}} type="submit" value="Posts" class="btn btn-default"/> 
            </div>
           </form>
           <Link to="/mystory">Go Back</Link>
           
        </div>
    )
    };

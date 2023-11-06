import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
export default function Edit(event){
   // event.preventDefault()
    const [name,setname]=useState("")
    const [massage,setMassage]=useState("")
    const [time,setTime]=useState("")
    const token=localStorage.getItem("app_token")
    const handalUpload=(e,id)=>{
        e.preventDefault()
        const payload={
            name,
            massage,
            time
        }
        const patchData=()=>{
            fetch(`http://localhost:7000/edit/${id}`,{
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
    }
    return (
        <div>
            <form onSubmit={handalUpload} action="/stats" enctype="multipart/form-data" method="post">
                <h1>Update The story</h1>
            <div style={{width:"30%",margin:"auto",border:"2px solid black",padding:"20px"}} class="form-group">
             
             <input type="text" onChange={(e)=>{setMassage(e.target.value)}} class="form-control" placeholder="enter message" /><br/>
            <input type="text" onChange={(e)=>{setname(e.target.value)}} placeholder="enter name" /> <br/>
            <input  type="date" placeholder="select time"  onChange={(e)=>{setTime(e.target.value)}} /><br/>
            
            <input style={{backgroundColor:"green", color:"white", border:"none",fontWeight:"bold",padding:"4px",marginTop:"15px"}} type="submit" value="Update" class="btn btn-default"/> 
            </div>
           </form>
           <Link to="/mystory">Go Back</Link>
        </div>
    )
}
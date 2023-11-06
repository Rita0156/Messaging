import { useEffect, useState } from "react"
import axios from "axios"

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

        useEffect(()=>{
            fetchData()
    },[])
   }

  

    return (
        <div>
            <h2>Create Story</h2>
            <form onSubmit={handalSubmit} action="/stats" enctype="multipart/form-data" method="post">
            <div style={{}} class="form-group">
             
             
            <input type="text" placeholder="enter name" onChange={(e)=>{setName(e.target.value)}} /> <br/>
            <input type="text"  placeholder="enter message" onChange={(e)=>{setMassage(e.target.value)}} /><br/>
            <input  type="date" placeholder="select time"  onChange={(e)=>{setTime(e.target.value)}} /><br/>
            <input type="file" placeholder="upload image" onChange={(e)=>{seImage(e.target.files[0])}}/><br/>
           
            <input type="submit" value="Submit!" class="btn btn-default"/> 
            </div>
           </form>
           
        </div>
    )
    };

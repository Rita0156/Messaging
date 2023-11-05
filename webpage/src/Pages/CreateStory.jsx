import { useState } from "react"
import axios from "axios"

export default function CreateStory(){
    const [name,setName]=useState("")
    const [massage,setMassage]=useState("")
    const [image,seImage]=useState("")
    const [time,setTime]=useState("")
    //const []=useState("")
  const handalUpload=()=>{
    //const handalUpload=(e)=>{
        const formdata=new FormData()
        formdata.append("file",image)
        axios.post("http://localhost:7000/upload",formdata)
        .then((res)=>console.log(res))
        .catch(err=>console.log(err))
    //}
  }
   const handalSubmit=()=>{
    const formdata=new FormData()
          formdata.append("file",image)
    const payload={
        name,
        massage,
        image,
        time
    }
       fetch("",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(payload)
       },formdata)
       .then((req)=>{return req.json})
       .then((res)=>{console.log(res)})
       .catch((err)=>{console.log(err)})
   }

    return (
        <div>
            <form onSubmit={handalSubmit} action="/stats" enctype="multipart/form-data" method="post">
            <div class="form-group">
             
             
            <input type="text" placeholder="enter name" onChange={(e)=>{setName(e.target.value)}} /> <br/>
            <input type="text"  placeholder="enter message" onChange={(e)=>{setMassage(e.target.value)}} /><br/>
            <input  type="date" placeholder="select time"  onChange={(e)=>{setTime(e.target.value)}} /><br/>
            <input type="file" placeholder="upload image" onChange={(e)=>{seImage(e.target.files[0])}}/>
            <button onClick={handalUpload}>upload</button>
            <input type="submit" value="Get me the stats!" class="btn btn-default"/> 
            </div>
           </form>
           
        </div>
    )
}
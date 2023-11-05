import axios from "axios"
import { useState } from "react"
export default function Edit(){
    const [image,seImage]=useState("")
    const handalUpload=(e)=>{
        const formdata=new FormData()
        formdata.append("file",image)
        axios.post("http://localhost:7000/upload",formdata)
        .then((res)=>console.log(res))
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <form action="/stats" enctype="multipart/form-data" method="post">
            <div class="form-group">
             
             <input type="text" class="form-control" placeholder="enter message" /><br/>
            <input type="text" placeholder="enter name" /> <br/>
            <input  type="date" placeholder="select time"  onChange={(e)=>{setTime(e.target.value)}} /><br/>
            <input type="file" placeholder="upload image" onChange={(e)=>{seImage(e.target.files[0])}}/>
            <button onClick={handalUpload}>upload</button>
            <input type="submit" value="Get me the stats!" class="btn btn-default"/> 
            </div>
           </form>
           
        </div>
    )
}
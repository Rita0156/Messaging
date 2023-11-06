import axios from "axios"
import { useState } from "react"
export default function Edit(event){
    event.preventDefault()
    const [name,setname]=useState("")
    const [massage,setMassage]=useState("")
    const [time,setTime]=useState("")
    const handalUpload=(e,id)=>{
        e.preventDefault()
        const payload={
            name,
            massage,
            time
        }
        const patchData=()=>{
            fetch(`http://localhost:7000/edit/`)
        }
    }
    return (
        <div>
            <form onSubmit={handalUpload} action="/stats" enctype="multipart/form-data" method="post">
            <div class="form-group">
             
             <input type="text" onChange={(e)=>{setMassage(e.target.value)}} class="form-control" placeholder="enter message" /><br/>
            <input type="text" onChange={(e)=>{setname(e.target.value)}} placeholder="enter name" /> <br/>
            <input  type="date" placeholder="select time"  onChange={(e)=>{setTime(e.target.value)}} /><br/>
            
            <input type="submit" value="Update" class="btn btn-default"/> 
            </div>
           </form>
           
        </div>
    )
}
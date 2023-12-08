//import { json } from "express";
import { Link } from "react-router-dom";
//import Edit from "./Edit"

export default function MysroryitemPage({user,massage,time,avatar,ID}){
    const token=localStorage.getItem("app_token")
   //console.log(props,"props")

   const handalDelete=()=>{
    fetch(`http://localhost:7000/mystory/${ID}`,{
       method:"DELETE",
       headers:{
           "Authorization":`Bearer ${token}`
       }
    })
    .then((req)=>{return req.json()})
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err);})
     alert("Post deleted")
    //data()
    
}

    
    
   
    return (
       <div>
           <h2>{user}</h2>
           <h3 style={{textAlign:"left",marginBottom:"15px",paddingLeft:"20px"}}>{massage}</h3>
           <img style={{width:"80%"}} src={avatar} alt="prs"/>
           <p style={{marginBottom:"20px"}}>{time}</p>
           <button style={{border:"2px solid white",color:"white",fontWeight:"bold", fontSize:"17px",padding:"5px",borderRadius:"10px"}} onClick={handalDelete}>Delete</button>
           
           
       </div>
    )
}
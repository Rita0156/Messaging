//import { json } from "express";
//import { Link } from "react-router-dom";
//import Edit from "./Edit"

import { useState } from "react"
//import LoadingSpinner from "../Pages/LodingCont"
var isLoadingpage;
 function MysroryitemPage({user,massage,time,avatar,ID}){
    const token=localStorage.getItem("app_token")
   //console.log(props,"props")
   //const [isLoading,setLoding]=useState(false)
   
    //const [load,set]
   
    const handalDelete=()=>{
        // setLoding(true)
         fetch(`https://insta-app-4i97.onrender.com/mystory/${ID}`,{
            method:"DELETE",
            headers:{
                "Authorization":`Bearer ${token}`
            }
         })
         .then((req)=>{return req.json()})
         .then((res)=>{console.log(res,"deleted")
         //setLoding(setLoding?true:false)
          isLoadingpage=ID
         })
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
export {MysroryitemPage,isLoadingpage}
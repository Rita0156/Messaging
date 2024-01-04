//import { json } from "express";
//import { Link } from "react-router-dom";
//import Edit from "./Edit"

import { useEffect, useState } from "react"

 function MysroryitemPage({props}){
    const token=localStorage.getItem("app_token")
     const [DataAction,setData]=useState([])

     const data=()=>{
        fetch("https://insta-app-4i97.onrender.com/mystory",{
            method:"GET",
            headers: { "Authorization": `Bearer ${token}`}
        })
        .then((req)=>{
            return req.json()
        })
        .then((data)=>{
            console.log(data)
            //setUserName(data[0].name)
            //setTotal(data.length)
            //setPos(data)
            setData(data)
        })
    }
    
   
    const handalDelete=(ID)=>{
        // setLoding(true)
         fetch(`https://insta-app-4i97.onrender.com/mystory/${ID}`,{
            method:"DELETE",
            headers:{
                "Authorization":`Bearer ${token}`
            }
         })
         .then((req)=>{return req.json()})
         .then((res)=>{
            console.log(res)
            alert("Post deleted")
            setData(res)
            data()
         })
         .catch((err)=>{console.log(err);})
          
        
         
     }

     useEffect(()=>{
          setData(props)
     },[])
    
    
   
    return (
       <div>
           {DataAction.map((item)=>{
              <div>
                   
                 <h2>{item.name}</h2>
                 <h3 style={{textAlign:"left",marginBottom:"15px",paddingLeft:"20px"}}>{}</h3>
                 <img style={{width:"80%"}} src={item.Image} alt="prs"/>
                 <p style={{marginBottom:"20px"}}>{item.time}</p>
                <button style={{border:"2px solid white",color:"white",fontWeight:"bold", fontSize:"17px",padding:"5px",borderRadius:"10px"}} onClick={handalDelete(item._id)}>Delete</button>
           
              </div>
           })}
           
       </div>
    )
}
export default MysroryitemPage
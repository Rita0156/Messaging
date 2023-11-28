//import { Postitem } from "../componant/Postitem"
import { useState,useEffect } from "react"
import {Link,Navigate} from "react-router-dom"
//import Edit from "../component/Edit"
import MysroryitemPage from "../component/MyStoryData"
import "./mystory.css"

 const Mystory=()=>{
    let token=localStorage.getItem("app_token")
    const [pos,setPos]=useState([])
    const handalOut=()=>{
        token=null
        localStorage.setItem("app_token",token)
        alert("Log Out")
       }
    const data=()=>{
        fetch("http://localhost:7000/mystory",{
            method:"GET",
            headers: { "Authorization": `Bearer ${token}`}
        })
        .then((req)=>{
            return req.json()
        })
        .then((data)=>{
            console.log(data)
            setPos(data)
        })
    }
    
    
    useEffect(()=>{
        data()
        //handalDelete()
    },[])
    if (!token) {
        return <Navigate replace to="/login" />;
    }
    else
    return (
        <div>
            
            
            <div className="navbar">  
            
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/">Home</Link>
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/mystory">My Story</Link>
            
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/create">Create</Link>
            <Link onClick={handalOut} style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to ="/login">Logout</Link>
      

      
     
       
      
 
               </div>
               <div className="story">
               {pos.length==0?<h1>You have not created post yet</h1>:pos.map((item)=>(
                  <MysroryitemPage user={item.name} avatar={item.Image} massage={item.massage} time={item.time} ID={(item._id)}/>
                  
                 ))}
               </div>
        </div>
    )
}
export default Mystory

// {pos.map((item)=>(
//     <MysroryitemPage user={item.name} avatar={item.image} massage={item.massage} time={item.time} handalEdit={handalEdit}/>
//  ))}
// {pos.Map((item)=>(
//     <MysroryitemPage user={item.name} handalEdit={handalEdit(item.id)} massage={item.massage} time={item.time} avatar={item.image} />
// ))}
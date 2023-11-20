//import { Postitem } from "../componant/Postitem"
import { useState,useEffect } from "react"
import {Link,Navigate} from "react-router-dom"
//import Edit from "../component/Edit"
import MysroryitemPage from "../component/MyStoryData"
import "./mystory.css"

 const Mystory=()=>{
    const token=localStorage.getItem("app_token")
    const [pos,setPos]=useState([])
    if(token==null){
        <Navigate to="/login" replace={true} />
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
    const handalEdit=(id)=>{
        <Link to="/edit"></Link>
    }
    useEffect(()=>{
        data()
    },[])

    return (
        <div>
            <h3>My Story</h3>
            
            <div className="navbar">  
            
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/">Home</Link>
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/mystory">My Story</Link>
            
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/create">Create</Link>
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to ="/login">Logout</Link>
      

      
     
       
      
 
               </div>
               <div>
               {pos.map((item)=>(
                  <MysroryitemPage user={item.name} avatar={item.image} massage={item.massage} time={item.time} handalEdit={handalEdit}/>
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
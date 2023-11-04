//import { Postitem } from "../componant/Postitem"
import { useState,useEffect } from "react"
import {Link} from "react-router-dom"
//import Edit from "../component/Edit"
import MysroryitemPage from "../component/MyStoryData"
 const Mystory=()=>{
    const token=localStorage.getItem("app_token")
    const [pos,setPos]=useState([])
    const data=()=>{
        fetch("http://localhost:7000/mystory",{
            method:"GET",
            headers: { "Authorization": `Bearer ${token}`}
        })
        .then((req)=>{
            return req.json()
        })
        .then((data)=>{
            console.log(data.reel)
            setPos(data.reel)
        })
    }
    useEffect(()=>{
        data()
    },[])

    return (
        <div>
            <h3>My Story</h3>
            
            <div style={{width:"95%", display:"flex", justifyContent:"space-around", paddingLeft:"70px",paddingRight:"70px"} }>  
            
            <Link to="/">Home</Link>
            <Link to="/mystory">My Story</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Signup</Link>
            <Link to ="/login">Logout</Link>
      

      
     
       
      
 
               </div>
               <div>
                 {pos.map((item)=>(
                    <MysroryitemPage user={item.name} avatar={item.image} massage={item.massage} time={item.time}/>
                 ))}
               </div>
        </div>
    )
}
export default Mystory
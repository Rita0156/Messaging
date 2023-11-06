import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import { Navigate } from 'react-router-dom'
//import axios from "axios"
 const Signup=()=>{
    //const navigate = useNavigate()
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [name,setName]=useState("")
    //const [time,setTime]=useState("")
    
    
    const handalSubmit=(e)=>{
       // e.preventDefault()
           const payload={
               name,
               email,
               pass
               
               //customerId
           }
           //fetch("")
           fetch("http://localhost:7000/signup",{
               method:"POST",
               headers: {
                   "Content-Type": "application/json",
                   // 'Content-Type': 'application/x-www-form-urlencoded',
                 },
                 body :JSON.stringify(payload)
           })
           .then((req)=>{
               return req.json()
           })
           .then((res)=>{
               console.log(res)
               if(res){
                <Navigate to="/login" replace={true} /> 
               }
               
           })
           .catch((err)=>{
            console.log(err)
           })
           

           
        
    }
    useEffect(()=>{
           handalSubmit()
          
    },[])


    return (
        <div style={{marginTop:"100px"}}>
            <div style={{width:"95%", display:"flex", justifyContent:"space-around", paddingLeft:"70px",paddingRight:"70px",marginBottom:"50px"} }>  
            
            <Link to="/">Home</Link>
            <Link to="/mystory">My Story</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Signup</Link>
            <Link to ="/login">Logout</Link>
      
           </div>
        <form onSubmit={handalSubmit} style={{ border:"3px solid black", width:"20%",padding:"30px",margin:"auto"}}>
        <h1>Signup Form</h1>
        <input type="text" placeholder="enter your name" onChange={(e)=>setName(e.target.value)}/><br/>
        <input  type="text" placeholder="Enter email"  onChange={(e)=>{setEmail(e.target.value)}} /><br/>
        <input  type="text" onChange={(e)=>{setPass(e.target.value)}} placeholder="Enter password"/><br/>
        
        <button type="submit" style={{color:"white",backgroundColor:"orange",fontSize:"18px", fontWeight:"bold",padding:"10px", marginTop:"20px",border:"none",borderRadius:"8px",cursor:"pointer"}} >Sing up</button>
       </form>
       <p>If you have account then</p>
       <Link to="/login">Login here</Link>
    </div>
    )
}
export default Signup
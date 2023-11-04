import { useEffect, useState } from "react"
import {Link, Outlet} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
 const Signup=()=>{
    const navigate = useNavigate()
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [name,setName]=useState("")
    const handalSubmit=()=>{
        
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
               //localStorage.setItem("app_token",res.token)
           })
           

           navigate('/login', { replace: true });
        
    }
    useEffect(()=>{
           handalSubmit()
    },[])


    return (
        <div style={{marginTop:"100px"}}>
            <div style={{width:"95%", display:"flex", justifyContent:"space-around", paddingLeft:"70px",paddingRight:"70px"} }>  
            
            <Link to="/">Home</Link>
            <Link to="/mystory">My Story</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Signup</Link>
            <Link to ="/login">Logout</Link>
      
           </div>
        <div style={{ border:"3px solid black", width:"20%",padding:"30px",margin:"auto"}}>
        <h1>Signup Form</h1>
        <input type="text" placeholder="enter name" onChange={(e)=>{
            setName(e.target.value)
        }} /><br/>
        <input  type="email" placeholder="Enter email"  onChange={(e)=>{setEmail(e.target.value)}} /><br/>
        <input  type="password" onChange={(e)=>{setPass(e.target.value)}} placeholder="Enter password"/><br/>
        
        <button onClick={handalSubmit} style={{color:"white",backgroundColor:"orange",fontSize:"18px", fontWeight:"bold",padding:"10px", marginTop:"20px",border:"none",borderRadius:"8px",cursor:"pointer"}} type="submit">Login</button>
       </div>
    </div>
    )
}
export default Signup
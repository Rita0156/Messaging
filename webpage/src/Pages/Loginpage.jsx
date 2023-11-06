//import { application, json } from "express"
import React, { useState } from "react"
import {Link} from "react-router-dom"
import { Navigate } from 'react-router-dom'
 const LoginFun=()=>{
     const [email,setEmail]=useState("")
     const [pass,setPass]=useState("")
     //const navigate = useNavigate()
     const [isAuth,setAuth]=useState(false)
     const handalSubmit=(e)=>{
        e.preventDefault()
            const payload={
                email,
                pass
            }
            //fetch("")
            fetch("http://localhost:7000/login",{
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
                if(res.token){
                    localStorage.setItem("app_token",res.token)
                    setAuth(true)
                }
            })
           if(isAuth){
                 //<navigate path=""/>
                 <Navigate to="/" replace={true}/>
           }

            //navigate('/login', { replace: true });
         
     }
    return (
        <div style={{marginTop:"100px"}}>
            <div style={{width:"95%", display:"flex", justifyContent:"space-around", paddingLeft:"70px",paddingRight:"70px"} }>  
            
            <Link to="/">Home</Link>
            <Link to="/mystory">My Story</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Signup</Link>
            <Link to ="/login">Logout</Link>
      
           </div>
           
            <form onSubmit={handalSubmit} style={{ border:"3px solid black", width:"20%",padding:"30px",margin:"auto",marginTop:"50px"}}>
            <h1>Login Form</h1>
            <input  type="text" placeholder="Enter email"  onChange={(e)=>{setEmail(e.target.value)}} /><br/>
            <input  type="text" onChange={(e)=>{setPass(e.target.value)}} placeholder="Enter password"/><br/>
            <button  style={{color:"white",backgroundColor:"orange",fontSize:"18px", fontWeight:"bold",padding:"10px", marginTop:"20px",border:"none",borderRadius:"8px",cursor:"pointer"}} type="submit">Login</button>
           </form>
           <p>If you don't have create your account here </p>
           <Link to="/register">Signup here</Link>
        </div>
    )
}
export default LoginFun
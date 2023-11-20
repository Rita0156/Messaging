//import { application, json } from "express"
import React, { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import { Navigate } from 'react-router-dom'
import "./login.css"
 const LoginFun=()=>{
     const [email,setEmail]=useState("")
     const [pass,setPass]=useState("")
     //const navigate = useNavigate()
     const navigate=useNavigate()
     const [isAuth,setAuth]=useState(false)
     const handalSubmit=()=>{
        //e.preventDefault()
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
                alert("Login Successfull")
            })
          navigate("/")

            //navigate('/login', { replace: true });
         
     }
     if(isAuth){
        //<navigate path=""/>
        <Navigate to="/" replace={true}/>
     }
    return (
        <div style={{marginTop:"20px"}}>
            <div className="navbar">  
            
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/">Home</Link>
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/mystory">My Story</Link>
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/login">Login</Link>
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/register">Signup</Link>
            
      
           </div>
           
            <div className="sign">
            <div className="left">
            <h1>Login Form</h1>
            <div className="inside"  >
              <h2>Login</h2>
            <input  type="text"  placeholder="Enter email"  onChange={(e)=>{setEmail(e.target.value)}} /><br/>
            <input  type="text"  onChange={(e)=>{setPass(e.target.value)}} placeholder="Enter password"/><br/>
            <button onClick={handalSubmit}  style={{color:"white",backgroundColor:"orange",fontSize:"18px", fontWeight:"bold",padding:"10px", marginTop:"20px",border:"2px solid white",borderRadius:"8px",cursor:"pointer"}} type="submit">Login</button>
            <p>If you don't have create your account here </p>
            <Link style={{color:"white"}} to="/register">Signup here</Link>
           </div>
           
            </div>
            <div className="right">
                   <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="/>
            </div>
            </div>
        </div>
    )
}
export default LoginFun
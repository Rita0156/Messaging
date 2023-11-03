import { application, json } from "express"
import React, { useState } from "react"

 const LoginFun=()=>{
     const [email,setEmail]=useState("")
     const [pass,setPass]=useState("")
     const handalSubmit=()=>{
         if(email==="" || pass===""){
             alert("Please fill all the fieldes")
         }else{
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
                localStorage.setItem("app_token",res.token)
            })
         }
     }
    return (
        <div style={{marginTop:"100px"}}>
            <div style={{ border:"3px solid black", width:"20%",padding:"30px",margin:"auto"}}>
            <h1>Login Form</h1>
            <input  type="email" placeholder="Enter email"  onChange={(e)=>{setEmail(e.target.value)}} /><br/>
            <input  type="password" onChange={(e)=>{setPass(e.target.value)}} placeholder="Enter password"/><br/>
            <button onClick={handalSubmit} style={{color:"white",backgroundColor:"orange",fontSize:"18px", fontWeight:"bold",padding:"10px", marginTop:"20px",border:"none",borderRadius:"8px",cursor:"pointer"}} type="submit">Login</button>
           </div>
        </div>
    )
}
export default LoginFun
import React from "react"


export const LoginFun=()=>{
    // const [email,setEmail]=React.State("")
    // const [pass,setPass]=React.State("")
    // const handalSubmit=()=>{
    //     if(email==="" || pass===""){
    //         alert("Please fill all the fieldes")
    //     }
    // }
    return (
        <div style={{marginTop:"100px"}}>
            <div style={{ border:"3px solid black", width:"20%",padding:"30px",margin:"auto"}}>
            <h1>Login Form</h1>
            <input  type="email" placeholder="Enter email"/><br/>
            <input  type="password" placeholder="Enter password"/><br/>
            <button onClick={""} style={{color:"white",backgroundColor:"orange",fontSize:"18px", fontWeight:"bold",padding:"10px", marginTop:"20px",border:"none",borderRadius:"8px",cursor:"pointer"}} type="submit">Login</button>
           </div>
        </div>
    )
}
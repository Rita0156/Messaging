import {  useState } from "react"
import {Link, useNavigate} from "react-router-dom"
//import { Navigate } from 'react-router-dom'
import "./signup.css"
//import axios from "axios"
 const Signup=()=>{
    //const navigate = useNavigate()
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [name,setName]=useState("")
    //const [time,setTime]=useState("")
    
    
    const handalSubmit=()=>{
        //e.preventDefault()
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
               if(res==="user is already present"){
                alert("User is already present")
               }
               else if(res==="signup successfull"){
                alert("Account Created Successfully") 
               }else{
                alert("Something went wrong please try again")
               }
               
               
               
           })
           .catch((err)=>{
            
            console.log(err)
           })
           
         navigate("/login")
           
        
    }
    


    return (
        <div className="cont">
            <div className="navbar">  
            
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/">Home</Link>
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/mystory">My Story</Link>
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/login">Login</Link>
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/register">Signup</Link>
            
      
           </div>
           <div className="sign">
               
              <div className="left" style={{backgroundColor:"white"}}>
                   <h1>Register Form</h1>
                   <div className="inside"  >
                   <h1>Signup</h1>
                   <input className="inp"  type="text" placeholder="enter your name" onChange={(e)=>setName(e.target.value)}/><br/>
                   <input className="inp"   type="email" placeholder="Enter email"  onChange={(e)=>{setEmail(e.target.value)}} /><br/>
                   <input className="inp"   type="password" onChange={(e)=>{setPass(e.target.value)}} placeholder="Enter password"/><br/>
        
                   <button onClick={handalSubmit} type="submit" style={{color:"white",backgroundColor:"orange",fontSize:"18px", fontWeight:"bold",padding:"10px", marginTop:"20px",border:"2px solid white",borderRadius:"8px",cursor:"pointer"}} >Sing up</button>
                   <p>If you have account then</p>
                   <Link style={{color:"white"}} to="/login">Login here</Link>
                   </div>
                   
              </div>

              <div className="right">
                   <img src="https://us.123rf.com/450wm/djvstock/djvstock2006/djvstock200614491/148633027-couple-connected-online-by-different-electronic-means-vector-illustration-design.jpg?ver=6" alt="mob"/>
               </div>


           </div>
    </div>
    )
}
export default Signup
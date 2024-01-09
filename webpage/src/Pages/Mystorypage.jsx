import {getMyStoryData} from "../Auth/MainStorage/action"
import React, { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useParams, useSearchParams, Navigate } from "react-router-dom"

export default function Mystory(){
    const data=useSelector((store)=>store.AppReducer.Mystory)
    console.log(data,"data")
    const [pos,setPos]=useState([])
    const dispatch=useDispatch();
    let token=localStorage.getItem("app_token")
    var user_name=localStorage.getItem("user_name")
    //const [searchParam] = useSearchParams();
    const getData=async()=>{
        await fetch("https://insta-app-4i97.onrender.com/mystory",{
        method:"GET",
        headers: { "Authorization":`Bearer ${token}`}
    }
    )
    .then((req)=>{
        //console.log(req)
        return req.json()
    })
    .then((res)=>{
        console.log(res,"res")
        //setLoding(false)
        setPos(res)
        
    })
    }
    //const location=useLocation();
    useEffect(()=>{
        //dispatch(getMyStoryData())
        getData()
    },[])
    console.log(pos,"pos.........")
    if (!token) {
        return <Navigate replace to="/login" />;
    }
    else
    return (
        <div>
              <div className="navbar">  
            
                 <Link className="lnk" style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/">Home</Link>
                 <Link className="lnk" style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/mystory">My Story</Link>
                  <Link className="lnk" style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/create">Create</Link>
                 <Link className="lnk"  style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to ="/login">Logout</Link>
                 <h2 style={{color:"white",backgroundColor:"none"}}>User: {user_name}</h2>
             </div>
             <div className="story">
             {(pos!=undefined && pos.length>0)?pos.map((item)=>{
                    <div key={item._id}>
                       <h2>{item.massage}</h2>
                       <img src={item.Image}/>
                       <p>{item.time}</p>
                       <button>Delete</button>
                   </div>
             }):<div>You have not posted anything yet</div>
                
             }
             </div>
        </div>
    )
}
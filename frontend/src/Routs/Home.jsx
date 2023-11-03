import {Postitem} from "../componant/Postitem"
import { useEffect, useState } from "react"
import {Link, Outlet} from "react-router-dom"
 const Homepage=()=>{
    const [pos,setPos]=useState([])
    const data=()=>{
        fetch("http://localhost:7000/story")
        .then((req)=>{
            return req.json()
        })
        .then((res)=>{
            console.log(res.reel)
            setPos(res.reel)
        })
    }
    useEffect(()=>{
        data()
    },[])
    return(
        <div>
            
            <h1>Home page</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/story">My Story</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Signup</Link>
          </li>
        </ul>
      

      <Outlet />
      <div>
        {pos.map(item=>{
            <Postitem names={item.name} message={item.message} />
        })}
      </div>
            
            
        </div>
    )
}
export default Homepage
import { Postitem } from "../componant/Postitem"
import { useState,useEffect } from "react"

 const Mystory=()=>{
    const [pos,setPos]=useState([])
    const data=()=>{
        fetch("http://localhost:7000/mystory")
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

    return (
        <div>
            <h3>My Story</h3>
            <div>
        {pos.map(item=>{
            <Postitem names={item.name} message={item.message} />
            
 })}
 
      </div>
        </div>
    )
}
export default Mystory
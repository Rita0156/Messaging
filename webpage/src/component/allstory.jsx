import { useEffect,useState } from "react"
import ItemPage from "./Item"
export default function Story(){
    const [pos,setPos]=useState([])
    const token=localStorage.getItem("app_token")
    const data=()=>{
        fetch("http://localhost:7000/story",{
            method:"GET",
            headers: { "Authorization": `Bearer ${token}`}
        })
        .then((req)=>{
            return req.json()
        })
        .then((res)=>{
            console.log(res.reel)
            setPos(res.reel)
        })
    }
    
    return (
          <div>
            {pos.map((item)=>(
                <ItemPage  user={item.name} massage={item.massage} time={item.time} />
            ))}
          </div>
    )
}
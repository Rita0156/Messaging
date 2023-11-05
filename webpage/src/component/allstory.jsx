import { useEffect,useState } from "react"
import ItemPage from "./Item"
export default function Story(){
    const [pos,setPos]=useState([])
   // const token=localStorage.getItem("app_token")
    
    
    return (
          <div>
            {pos.map((item)=>(
                <ItemPage avatar={item.image}  user={item.name} massage={item.massage} time={item.time} />
            ))}
          </div>
    )
}
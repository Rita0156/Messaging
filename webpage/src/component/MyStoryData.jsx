import { Link } from "react-router-dom";

export default function MysroryitemPage({user,massage,time,avatar,ID}){
    return (
       <div>
           <h2>{user}</h2>
           <h3>{massage}</h3>
           <img style={{width:"80%"}} src={avatar}/>
           <p style={{marginBottom:"20px"}}>{time}</p>
           
           <Link onClick={ID} style={{color:"white", fontSize:"20px", fontWeight:"bold", border:"2px solid white", textDecoration:"none", padding:"5px", borderRadius:"10px",marginTop:"15px"}} to="/edit">Edit</Link>
       </div>
    )
}
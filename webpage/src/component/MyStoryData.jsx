import { Link } from "react-router-dom";

export default function MysroryitemPage({user,massage,time,avatar,ID}){
    return (
       <div>
           <h2>{user}</h2>
           <h3>{massage}</h3>
           <img style={{width:"80%"}} src={avatar}/>
           <p style={{marginBottom:"20px"}}>{time}</p>
           
           <button onClick={ID}>Delete</button>
       </div>
    )
}
import { Link } from "react-router-dom";

export default function MysroryitemPage({user,massage,time,avatar,ID}){
    const token=localStorage.getItem("app_token")
    //
    const handalDelete=()=>{
        const id={ID}
        console.log(id.ID,"id")
        const sid=id.ID
        


        alert("clicked")
        fetch(`https://mini-insta-app.onrender.com/mystory:${sid}`,{
           method:"DELETE",
           headers:{
               "Authorization":`Bearer ${token}`
           }
        })
        .then((req)=>{return req.json()})
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err);})

        
   }
    return (
       <div>
           <h2>{user}</h2>
           <h3>{massage}</h3>
           <img style={{width:"80%"}} src={avatar}/>
           <p style={{marginBottom:"20px"}}>{time}</p>
           
           <button style={{border:"2px solid white",color:"white",fontWeight:"bold", fontSize:"17px",padding:"5px",borderRadius:"10px"}} onClick={handalDelete}>Delete</button>
       </div>
    )
}
//import { json } from "express";
import { Link } from "react-router-dom";

export default function MysroryitemPage({user,massage,time,avatar,ID}){
    const token=localStorage.getItem("app_token")

    const data=()=>{
        fetch("http://localhost:7000/mystory",{
            method:"GET",
            headers: { "Authorization": `Bearer ${token}`}
        })
        .then((req)=>{
            return req.json()
        })
        .then((data)=>{
            console.log(data)
            //setUserName(data[0].name)
            //setPos(data)
        })
    }
    //
    const handalDelete=()=>{
        //const id={ID}
        console.log("id",ID,"IDDDD")
        //var sid=id.ID
         //sid=(sid).toString()


        alert("clicked")
        fetch(`http://localhost:7000/mystory/${ID}`,{
           method:"DELETE",
           headers:{
               "Authorization":`Bearer ${token}`
           }
        })
        .then((req)=>{return req.json()})
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err);})

        data()
   }
   const handalEdit=()=>{

   }
    return (
       <div>
           <h2>{user}</h2>
           <h3 style={{textAlign:"left",marginBottom:"15px",paddingLeft:"20px"}}>{massage}</h3>
           <img style={{width:"80%"}} src={avatar}/>
           <p style={{marginBottom:"20px"}}>{time}</p>
           
           <button style={{border:"2px solid white",color:"white",fontWeight:"bold", fontSize:"17px",padding:"5px",borderRadius:"10px"}} onClick={handalDelete}>Delete</button>
           <button style={{border:"2px solid white",color:"white",fontWeight:"bold", fontSize:"17px",padding:"5px",borderRadius:"10px"}} onClick={handalEdit} >Edit</button>
       </div>
    )
}
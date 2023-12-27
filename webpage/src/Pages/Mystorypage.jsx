//import { Postitem } from "../componant/Postitem"
import { useState,useEffect } from "react"
import {Link,Navigate} from "react-router-dom"
//import Edit from "../component/Edit"
import MysroryitemPage from "../component/MyStoryData"
import "./mystory.css"

 const Mystory=()=>{
    //const [userName,setUserName]=useState("")
    let token=localStorage.getItem("app_token")
    var user_name=localStorage.getItem("user_name")
    const [total,setTotal]=useState(false)
    const [Id,setId]=useState('')

    //setUserName(user_name.name)
    //console.log(isLoadingpage,"load page")
    const [pos,setPos]=useState([])
    const handalOut=()=>{
        token=null
        user_name=""
        localStorage.setItem("app_token",token)
        localStorage.setItem("user_name",JSON.stringify(user_name))
        alert("Log Out")
    }
    const data=()=>{
        fetch("https://insta-app-4i97.onrender.com/mystory",{
            method:"GET",
            headers: { "Authorization": `Bearer ${token}`}
        })
        .then((req)=>{
            return req.json()
        })
        .then((data)=>{
            console.log(data)
            //setUserName(data[0].name)
            setTotal(data.length)
            setPos(data)
        })
    }
    
    // function handalDelete(ID){
    //     fetch(`https://insta-app-4i97.onrender.com/mystory/${ID}`,{
    //         method:"DELETE",
    //         headers:{
    //             "Authorization":`Bearer ${token}`
    //         }
    //      })
    //      .then((req)=>{return req.json()})
    //      .then((res)=>{console.log(res)
    //      //setLoding(setLoding?true:false)
    //       //isLoadingpage=isLoadingpage+1
    //      })
    //      .catch((err)=>{console.log(err);})
    //       alert("Post deleted")
    //      data()
         
    // }
    useEffect(()=>{
        data()

        if(total==true && Id==true){
            fetch(`https://insta-app-4i97.onrender.com/mystory/${Id}`,{
            method:"DELETE",
            headers:{
                "Authorization":`Bearer ${token}`
            }
         })
         .then((req)=>{return req.json()})
         .then((res)=>{console.log(res)
         //setLoding(setLoding?true:false)
          //isLoadingpage=isLoadingpage+1
          alert("Post deleted")
          data()
          setTotal(false)
          setId('')
         })
         .catch((err)=>{console.log(err);})
         
        }
        
    },[total,Id])
    if (!token) {
        return <Navigate replace to="/login" />;
    }
    else
    return (
        <div>
            
            
            <div className="navbar">  
            
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/">Home</Link>
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/mystory">My Story</Link>
            
            <Link style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to="/create">Create</Link>
            <Link onClick={handalOut} style={{textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",background:"none"}} to ="/login">Logout</Link>
      
             <div style={{display:"flex",alignItems:"center"}}>
                <img style={{width:"30px"}} src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="user"/>
                <h2 style={{color:"white"}}>{user_name}</h2>
             </div>
      
     
       
      
 
               </div>
               <div className="story">
            {(pos.length==0&& pos==undefined)?<h1 style={{textAlign:"center"}}>You have not created post yet</h1>:pos.map((item)=>(
                //   <MysroryitemPage key={item._id} user={item.name} massage={item.massage} avatar={item.Image} time={item.time} ID={item._id} />
                   <div key={item._id}>
                        <h2>{item.name}</h2>
                        <h3 style={{textAlign:"left",marginBottom:"15px",paddingLeft:"20px"}}>{item.massage}</h3>
                        <img style={{width:"80%"}} src={item.Image} alt="prs"/>
                        <p style={{marginBottom:"20px"}}>{item.item}</p>
                        <button style={{border:"2px solid white",color:"white",fontWeight:"bold", fontSize:"17px",padding:"5px",borderRadius:"10px",cursor:"pointer"}} onClick={()=>{
                            setTotal(true)
                            setPos(item._id)
                        }}>Delete</button>
                   </div>
                 ))}
               </div>
        </div>
    )
}
export default Mystory

// {pos.map((item)=>(
//     <MysroryitemPage user={item.name} avatar={item.image} massage={item.massage} time={item.time} handalEdit={handalEdit}/>
//  ))}
// {pos.Map((item)=>(
//     <MysroryitemPage user={item.name} handalEdit={handalEdit(item.id)} massage={item.massage} time={item.time} avatar={item.image} />
// ))}
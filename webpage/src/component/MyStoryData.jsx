
export default function MysroryitemPage({user,massage,time,avatar,handalEdit}){
    return (
       <div>
           <h2>{user}</h2>
           <h3>{massage}</h3>
           <img src={avatar}/>
           <p>{time}</p>
           
           <button onClick={handalEdit}>Edit</button>
       </div>
    )
}
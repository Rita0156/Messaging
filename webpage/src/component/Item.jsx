
import "./item.css"
export default function ItemPage({user,massage,time,avatar}){
         return (
            <div className="item">
                <h2>Name :{user}</h2>
                <h3>Message :{massage}</h3>
                <img style={{width:"80%"}} src={avatar}/>
                <p>Time :{time }</p>
            </div>
         )
}
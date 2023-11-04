

export default function ItemPage({user,massage,time}){
         return (
            <div>
                <h2>{user}</h2>
                <h3>{massage}</h3>
                <p>{time}</p>
            </div>
         )
}
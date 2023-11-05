

export default function ItemPage({user,massage,time,avatar}){
         return (
            <div>
                <h2>{user} :name</h2>
                <h3>{massage}:message</h3>
                <img src={avatar}/>
                <p>{time } time</p>
            </div>
         )
}
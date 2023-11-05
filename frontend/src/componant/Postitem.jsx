
import {UpdateStory} from "./Update"
export const Postitem=({names,message,time})=>{
    
    return (
        <div>
            <h2>{names}</h2>
            <p>{time}</p>
            <h3>{message}</h3>
            <UpdateStory/>
        </div>
    )
}
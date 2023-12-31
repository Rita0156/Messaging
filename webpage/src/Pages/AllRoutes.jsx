
import { Route,Routes } from "react-router-dom";
import Homepage from "./Homepage"
import LoginFun from "./Loginpage"
import Mystory from "./Mystorypage"
import Signup from "./Signuppage"
import CreateStory from "./CreateStory";
//import Edit from "../component/Edit";

export const AllRoutes=()=>{
    return (
        <Routes>
        
        <Route path="/" element={<Homepage/>}    />
        <Route path="mystory" element={<Mystory/>}/>
        
        <Route path="create" element={<CreateStory/>} />
        <Route path="login" element={<LoginFun/>} />
        <Route path="register" element={<Signup/>} />
        
    </Routes>
    )
}
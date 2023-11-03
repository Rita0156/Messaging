
import { Route,Routes } from "react-router-dom";
import Homepage from "./Home"
import LoginFun from "./Login"
import Mystory from "./MyStory"
import Signup from "./Signup"

export const Allrout=()=>{
    return (
        <Routes>
        <Route path="/" element={<Homepage/>}    />
        <Route path="story" element={<Mystory/>}/>
        <Route path="login" element={<LoginFun/>} />
        <Route path="register" element={<Signup/>} />
    </Routes>
    )
}
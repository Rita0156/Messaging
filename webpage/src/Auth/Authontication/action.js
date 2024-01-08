import axios from "axios"
import * as types from "./types"

const loginFunction=(payLoad)=>(dispatch)=>{
    dispatch({type:types.LOGIN_REQUEST})
    return axios({
        method:"post",
        url:"/api/login",
        baseURL:"https://reqres.in",
        data:payLoad
    })
    .then((d)=>{
          dispatch({type:types.LOGIN_SUCCESS,payLoad:d.data.token})
    })
    .catch(()=>{
        dispatch({type:types.LOGIN_FAILURE})
    })
}

export {loginFunction}
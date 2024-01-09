
import { type } from "os";
import * as types from "./actionType";
import axios from "axios";

export const getDataStory=()=>(dispatch)=>{
     dispatch({type:types.GET_DATA_REQUEST}) 
   return axios.get(`https://insta-app-4i97.onrender.com/story`)
    .then((d)=>{
        return dispatch({
            type:types.GET_DATA_SUCCESS,
            payLoad:d.data
        })
    })
    .catch((e)=>{
        return dispatch({
            type:types.GET_DATA_FAILURE
        })
    })
}

export const getMyStoryData=()=>(dispatch)=>{
    dispatch({type:types.MYSTORY_REQUEST}) 
  return axios.get(`https://insta-app-4i97.onrender.com/mystory`)
   .then((d)=>{
    console.log(d," mystory req res")
       return dispatch({
           type:types.MYSTORY_SUCCESS,
           payLoad:d

       })
   })
   .catch((e)=>{
       return dispatch({
           type:types.MYSTORY_FAILURE
       })
   })
   //console.log("ge")
}


export const deleteItem=(id)=>(dispatch)=>{
    dispatch({type:types.MYSTORY_DELETE_REQUEST})
    return axios.delete(`https://insta-app-4i97.onrender.com/mystory/${id}`)
    .then((d)=>{
        return dispatch({
            type:types.MYSTORY_DELETE_SUCCESS,
            
        })

    })
    .catch((e)=>{
        return dispatch({
            type:types.MYSTORY_DELETE_FAILURE
        })
    })

    //getMyStoryData()
}


//export {}

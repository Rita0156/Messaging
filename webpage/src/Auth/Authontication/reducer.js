import * as types from "./types";
const initData={
    token:"",
    isLoading:false,
    isAuth:false,
    isError:false
}
const reducer=(oldState=initData,action)=>{
    const {type,payLoad}=action
    switch(type){
        case types.LOGIN_REQUEST : return{
            ...oldState,
            isLoading:true

        };
        case types.LOGIN_SUCCESS : return{
            ...oldState,
            isLoading:false,
            isAuth:true,
            token:payLoad

        };
        case types.LOGIN_FAILURE : return{
            ...oldState,
            isLoading:false,
            isAuth:false,
            token:"",
            isError:true

        }
        default :
        return oldState
    }
}
export {reducer}
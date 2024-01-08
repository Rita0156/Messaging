import * as types from "./actionType"
const initState={
    musicRecords:[],
    isLoading:false,
    isError:false
}

export const reducer=( oldState=initState,action)=>{
       const {type,payLoad}=action
       switch (type) {
        case types.GET_DATA_REQUEST :return {
            ...oldState,
            isLoading:true,
            isError:false
        }
        case types.GET_DATA_SUCCESS :return {
            ...oldState,
            isLoading:false,
            musicRecords:payLoad,
            isError:false
        }
        case types.GET_DATA_FAILURE :return {
            ...oldState,
            isLoading:false,
            isError:true
        }
       
        default:
            return oldState
       }
}

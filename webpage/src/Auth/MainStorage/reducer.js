import * as types from "./actionType"
const initState={
    story:[],
    mystory:[],
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
            story:payLoad,
            isError:false
        }
        case types.GET_DATA_FAILURE :return {
            ...oldState,
            isLoading:false,
            isError:true
        }
        case types.MYSTORY_REQUEST :return {
            ...oldState,
            isLoading:true,
            isError:false
        }
        case types.MYSTORY_SUCCESS :return {
            ...oldState,
            isLoading:false,
            mystory:payLoad,
            isError:false
        }
        case types.MYSTORY_FAILURE :return {
            ...oldState,
            isLoading:false,
            isError:true
        }
       
        default:
            return oldState
       }
}
console.log(initState,"init")

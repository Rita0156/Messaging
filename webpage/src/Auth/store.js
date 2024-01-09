import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {reducer as AppReducer} from "./MainStorage/reducer"
import {reducer as AuthReducer} from "./Authontication/reducer"
import {thunk} from "redux-thunk"
 
const rootReducer=combineReducers({AppReducer,AuthReducer})

const store=legacy_createStore(rootReducer, applyMiddleware(thunk))

export {store}
import {combineReducers} from "redux";
import {userReducer} from ".";

export const rootReducer = combineReducers({
    user: userReducer
})

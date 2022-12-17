import {Token, User} from "../../interfaces";
import {AnyAction} from "redux";
import {signInFailure, signInSuccess, signUpFailure, signUpSuccess} from "./user.action";

export type UserReducer = {
    readonly token: Token | null,
    readonly currentUser: User | null,
    readonly isLoading: boolean,
    readonly error: Error | null
}

const INITIAL_STATE: UserReducer = {
    token: null,
    currentUser: null,
    isLoading: false,
    error: null
}

export const userReducer = (state = INITIAL_STATE, action: AnyAction): UserReducer => {
    if (signInSuccess.match(action) || signUpSuccess.match(action)) {
        return {...state, token: action.payload};
    }

    if (signInFailure.match(action) || signUpFailure.match(action)) {
        return {...state, error: action.payload};
    }

    return state;
}

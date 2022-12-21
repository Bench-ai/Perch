import {Token} from "../../interfaces";
import {AnyAction} from "redux";
import {
    accessTokenFailure,
    accessTokenSuccess,
    signInFailure,
    signInSuccess,
    signInWithEmailStart,
    signOutFailure,
    signOutStart,
    signOutSuccess,
    signUpFailure,
    signUpStart,
    signUpSuccess
} from "./auth.action";

export type AuthReducer = {
    readonly token: Token | null,
    readonly isLoading: boolean,
    readonly error: Error | null
}

const INITIAL_STATE: AuthReducer = {
    token: null,
    isLoading: false,
    error: null
}

export const authReducer = (state = INITIAL_STATE, action: AnyAction): AuthReducer => {
    if (
        signInWithEmailStart.match(action) ||
        signUpStart.match(action) ||
        signOutStart.match(action)
    ) {
        return {...state, isLoading: true, error: null};
    }

    if (signOutSuccess.match(action)) {
        return {...state, token: null, isLoading: false, error: null};
    }

    if (
        signInSuccess.match(action) ||
        signUpSuccess.match(action) ||
        accessTokenSuccess.match(action)
    ) {
        return {...state, isLoading: false, token: action.payload};
    }

    if (
        signInFailure.match(action) ||
        signUpFailure.match(action) ||
        accessTokenFailure.match(action) ||
        signOutFailure.match(action)
    ) {
        return {...state, isLoading: false, error: action.payload};
    }

    return state;
}

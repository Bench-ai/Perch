import {User} from "../../interfaces";
import {AnyAction} from "redux";
import {
    currentUserFailure,
    currentUserSuccess,
} from "./user.action";

export type UserReducer = {
    readonly currentUser: User | null,
    readonly isLoading: boolean,
    readonly error: Error | null
}

const INITIAL_STATE: UserReducer = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const userReducer = (state = INITIAL_STATE, action: AnyAction): UserReducer => {
    if (currentUserSuccess.match(action)) {
        return {...state, currentUser: action.payload};
    }

    if (currentUserFailure.match(action)) {
        return {...state, error: action.payload};
    }

    return state;
}

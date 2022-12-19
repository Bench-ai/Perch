import {USER_ACTION_TYPES} from "../../constants";
import {User} from "../../interfaces";
import {Action, ActionWithPayload, createAction, withMatcher} from "../redux.utils";

export type CurrentUserStart = Action<
    USER_ACTION_TYPES.SET_CURRENT_USER_START
>;

export type CurrentUserSuccess = ActionWithPayload<
    USER_ACTION_TYPES.SET_CURRENT_USER_SUCCESS,
    User
>;

export type CurrentUserFailure = ActionWithPayload<
    USER_ACTION_TYPES.SET_CURRENT_USER_FAILURE,
    Error
>;

export const currentUserStart = withMatcher(
    (): CurrentUserStart =>
        createAction(USER_ACTION_TYPES.SET_CURRENT_USER_START)
)

export const currentUserSuccess = withMatcher(
    (user: User): CurrentUserSuccess =>
        createAction(USER_ACTION_TYPES.SET_CURRENT_USER_SUCCESS, user)
)

export const currentUserFailure = withMatcher(
    (error: Error): CurrentUserFailure =>
        createAction(USER_ACTION_TYPES.SET_CURRENT_USER_FAILURE, error)
)



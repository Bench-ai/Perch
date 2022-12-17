import {ActionWithPayload, createAction, withMatcher} from "../../redux";
import {AUTH_ACTION_TYPES} from "../../constants";
import {LoginRequest, SignupRequest, Token} from "../../interfaces";

export type SignInWithEmailStart = ActionWithPayload<
    AUTH_ACTION_TYPES.SIGN_IN_WITH_EMAIL_START,
    LoginRequest
>;

export type SignInSuccess = ActionWithPayload<
    AUTH_ACTION_TYPES.SIGN_IN_SUCCESS,
    Token
>;

export type SignInFailure = ActionWithPayload<
    AUTH_ACTION_TYPES.SIGN_IN_FAILURE,
    Error
>;

export type SignUpStart = ActionWithPayload<
    AUTH_ACTION_TYPES.SIGN_UP_START,
    SignupRequest
>;

export type SignUpSuccess = ActionWithPayload<
    AUTH_ACTION_TYPES.SIGN_UP_SUCCESS,
    Token
>;

export type SignUpFailure = ActionWithPayload<
    AUTH_ACTION_TYPES.SIGN_UP_FAILURE,
    Error
>;

export const signInWithEmailStart = withMatcher(
    (loginRequest: LoginRequest): SignInWithEmailStart =>
    createAction(AUTH_ACTION_TYPES.SIGN_IN_WITH_EMAIL_START, loginRequest)
);

export const signInSuccess = withMatcher(
    (token: Token): SignInSuccess =>
        createAction(AUTH_ACTION_TYPES.SIGN_IN_SUCCESS, token)
);

export const signInFailure = withMatcher(
    (error: Error): SignInFailure =>
        createAction(AUTH_ACTION_TYPES.SIGN_IN_FAILURE, error)
);

export const signUpStart = withMatcher(
    (signupRequest: SignupRequest): SignUpStart =>
        createAction(AUTH_ACTION_TYPES.SIGN_UP_START, signupRequest)
);

export const signUpSuccess = withMatcher(
    (token: Token): SignUpSuccess =>
        createAction(AUTH_ACTION_TYPES.SIGN_UP_SUCCESS, token)
);

export const signUpFailure = withMatcher(
    (error: Error): SignUpFailure =>
        createAction(AUTH_ACTION_TYPES.SIGN_UP_FAILURE, error)
);

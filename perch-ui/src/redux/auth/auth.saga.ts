import {all, call, put, takeLatest} from "typed-redux-saga";
import {
    accessTokenSuccess,
    signInFailure,
    signInSuccess,
    SignInWithEmailStart, signOutFailure, signOutSuccess,
    signUpFailure,
    SignUpStart,
    signUpSuccess
} from "./auth.action";
import {accessToken, login, logout, signup} from "../../api/auth/auth.api";
import {CredentialsExpired, isToken} from "../../interfaces";
import {AUTH_ACTION_TYPES} from "../../constants";
import { credentialsExpiredNotification } from "../../components/notification/notification";

function* signInWithEmail({payload}: SignInWithEmailStart) {
    try {
        const { data } = yield* call(login, payload);
        if (isToken(data)) {
            yield* put(signInSuccess(data));
        }
    } catch(error) {
        yield* put(signInFailure(error as Error));
    }
}

function* signUp({payload}: SignUpStart) {
    try {
        const { data } = yield* call(signup, payload);
        if (isToken(data)) {
            yield* put(signUpSuccess(data));
        }
    } catch(error) {
        yield* put(signUpFailure(error as Error));
    }
}

function* getAccessToken() {
    try {
        const { data } = yield* call(accessToken);
        if (isToken(data)) {
            yield* put(accessTokenSuccess(data));
        }
    } catch (error) {
        const TokenError: CredentialsExpired = {
            message: "Credentials are Invalid or Expired",
            expired: true
        };
        credentialsExpiredNotification(TokenError);
        yield* put(signInFailure(error as Error));
    }
}

function* signOut() {
    try {
        yield* call(logout);
        yield* put(signOutSuccess());
    } catch (error) {
        yield* put(signOutFailure(error as Error));
    }
}

export function* onSignInWithEmailStart() {
    yield* takeLatest(AUTH_ACTION_TYPES.SIGN_IN_WITH_EMAIL_START, signInWithEmail);
}

export function* onSignUpStart() {
    yield* takeLatest(AUTH_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onAccessTokenStart() {
    yield* takeLatest(AUTH_ACTION_TYPES.ACCESS_TOKEN_START, getAccessToken);
}

export function* onSignOut() {
    yield* takeLatest(AUTH_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* authSagas() {
    yield* all([
        call(onSignInWithEmailStart),
        call(onAccessTokenStart),
        call(onSignUpStart),
        call(onSignOut),
    ]);
}

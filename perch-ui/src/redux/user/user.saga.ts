import { takeLatest, all, call, put } from "redux-saga/effects";
import {login} from "../../api/auth/auth.api";
import {signInFailure, SignInWithEmailStart} from "./user.action";
import {AUTH_ACTION_TYPES} from "../../constants";

function* signInWithEmail({payload}: SignInWithEmailStart) {
    try {
        const { data } = yield call(login, payload);
    } catch(error) {
        yield put(signInFailure(error as Error))
    }
}

export function* onSignInWithEmailStart() {
    yield takeLatest(AUTH_ACTION_TYPES.SIGN_IN_WITH_EMAIL_START, signInWithEmail)
}

export function* userSagas() {
    yield all([
        call(onSignInWithEmailStart),
    ]);
}


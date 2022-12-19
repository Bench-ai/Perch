import { takeLatest, all, call, put } from "typed-redux-saga/macro";
import {
    currentUserFailure, currentUserSuccess,
} from "./user.action";
import {USER_ACTION_TYPES} from "../../constants";
import {isUser} from "../../interfaces";
import {currentUser} from "../../api/user/user.api";

function* getCurrentUser() {
    try {
        const { data } = yield* call(currentUser);
        if (isUser(data)) {
            yield* put(currentUserSuccess(data));
        }
    } catch (error) {
        yield* put(currentUserFailure(error as Error));
    }
}

export function* onCurrentUserStart() {
    yield* takeLatest(USER_ACTION_TYPES.SET_CURRENT_USER_START, getCurrentUser);
}

export function* userSagas() {
    yield* all([
        call(onCurrentUserStart),
    ]);
}

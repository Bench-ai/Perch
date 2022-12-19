import { all, call } from "typed-redux-saga/macro";
import {userSagas} from "./user/user.saga";
import {authSagas} from "./auth/auth.saga";

export function* rootSaga() {
    yield* all([
            call(userSagas),
            call(authSagas),
        ]
    );
}

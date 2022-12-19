import {createSelector} from "reselect";
import {RootState} from "../../app/store";
import {AuthReducer} from "./auth.reducer";

export const selectAuthReducer = (state: RootState): AuthReducer => state.auth;

export const selectCurrentToken = createSelector(
    selectAuthReducer,
    (auth) => auth.token
);

export const selectAuthLoading = createSelector(
    selectAuthReducer,
    (auth) => auth.isLoading
);

export const selectAuthError = createSelector(
    selectAuthReducer,
    (auth) => auth.error
);

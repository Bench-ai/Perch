import {RootState} from "../../app/store";
import {UserReducer} from "./user.reducer";
import {createSelector} from "reselect";

export const selectUserReducer = (state: RootState): UserReducer => state.user;


export const selectCurrentUser = createSelector(
    selectUserReducer,
    (user) => user.currentUser
);

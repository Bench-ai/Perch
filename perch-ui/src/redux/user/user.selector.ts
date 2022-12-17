import {RootState} from "../../app/store";
import {UserReducer} from "./user.reducer";

export const selectUserReducer = (state: RootState): UserReducer => state.user;

import {UserReducer, userReducer} from "../user.reducer";
import {User} from "../../../interfaces";
import {signOutSuccess} from "../../auth/auth.action";
import {currentUserFailure, currentUserSuccess} from "../user.action";

describe("User Reducer", () => {
    const mockUser: User = {
        id: "mockId",
        username: "mockUsername",
        email: "mockEmail"
    }
    const mockError = new Error("mockError");
    const mockState: UserReducer = {
        currentUser: mockUser,
        isLoading: false,
        error: mockError
    }

    it('should return the initial state', () => {
        expect(
            userReducer(undefined, {type: undefined})
        ).toEqual({
            currentUser: null,
            isLoading: false,
            error: null
        })
    });

    it('should handle sign out success', () => {
        expect(
            userReducer(mockState, signOutSuccess)
        ).toEqual({
            currentUser: null,
            isLoading: false,
            error: null
        });
    });

    describe('should return correct user', () => {
        it('when fetching current user succeeds', () => {
            expect(
                userReducer(undefined, currentUserSuccess(mockUser)).currentUser
            ).toEqual(mockUser)
        });
    });

    describe('should return correct error', () => {
        it('when fetching current user fails', () => {
            expect(
                userReducer(undefined, currentUserFailure(mockError)).error
            ).toEqual(mockError)
        });
    });
});

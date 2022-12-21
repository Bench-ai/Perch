import {AuthReducer, authReducer} from "../auth.reducer";
import {
    accessTokenFailure,
    accessTokenSuccess,
    signInFailure,
    signInSuccess,
    signInWithEmailStart,
    signOutFailure,
    signOutStart,
    signOutSuccess,
    signUpFailure,
    signUpStart,
    signUpSuccess
} from "../auth.action";
import {Token} from "../../../interfaces";

describe("Auth Reducer", () => {
    const mockToken: Token = {
        userId: "mockUserId",
        accessToken: "mockAccessToken"
    }
    const mockError = new Error("mockError");
    const mockState: AuthReducer = {
        token: mockToken,
        isLoading: false,
        error: mockError
    }

    it('should return the initial state', () => {
        expect(
            authReducer(undefined, {type: undefined})
        ).toEqual({
            token: null,
            isLoading: false,
            error: null
        });
    });

    it('should handle sign out success', () => {
        expect(
            authReducer(mockState, signOutSuccess)
        ).toEqual({
            token: null,
            isLoading: false,
            error: null
        });
    });

    describe('should begin loading', () => {
        it('when user starts to sign in with email', () => {
            expect(
                authReducer(undefined, signInWithEmailStart).isLoading
            ).toBe(true);
        });

        it('when user starts to sign up', () => {
            expect(
                authReducer(undefined, signUpStart).isLoading
            ).toBe(true);
        });

        it('when user starts to sign out', () => {
            expect(
                authReducer(undefined, signOutStart).isLoading
            ).toBe(true);
        });
    });

    describe('should reset error', () => {
        it('when user starts to sign in with email', () => {
            expect(
                authReducer(undefined, signInWithEmailStart).error
            ).toBe(null);
        });

        it('when user starts to sign up', () => {
            expect(
                authReducer(undefined, signUpStart).error
            ).toBe(null);
        });

        it('when user starts to sign out', () => {
            expect(
                authReducer(undefined, signOutStart).error
            ).toBe(null);
        });
    });

    describe('should stop loading', () => {
        it('when user succeeds to sign in', () => {
            expect(
                authReducer(undefined, signInSuccess(mockToken)).isLoading
            ).toBe(false);
        });

        it('when user succeeds to sign up', () => {
            expect(
                authReducer(undefined, signUpSuccess(mockToken)).isLoading
            ).toBe(false);
        });

        it('when user succeeds to refresh access token', () => {
            expect(
                authReducer(undefined, accessTokenSuccess(mockToken)).isLoading
            ).toBe(false);
        });

        it('when user fails to sign in', () => {
            expect(
                authReducer(undefined, signInFailure(mockError)).isLoading
            ).toBe(false);
        });

        it('when user fails to sign up', () => {
            expect(
                authReducer(undefined, signUpFailure(mockError)).isLoading
            ).toBe(false);
        });

        it('when user fails to refresh access token', () => {
            expect(
                authReducer(undefined, accessTokenFailure(mockError)).isLoading
            ).toBe(false);
        });

        it('when user fails to sign out', () => {
            expect(
                authReducer(undefined, signOutFailure(mockError)).isLoading
            ).toBe(false);
        });
    });

    describe('should return correct token', () => {
        it('when user succeeds to sign in', () => {
            expect(
                authReducer(undefined, signInSuccess(mockToken)).token
            ).toEqual(mockToken);
        });

        it('when user succeeds to sign up', () => {
            expect(
                authReducer(undefined, signUpSuccess(mockToken)).token
            ).toEqual(mockToken);
        });

        it('when user succeeds to refresh access token', () => {
            expect(
                authReducer(undefined, accessTokenSuccess(mockToken)).token
            ).toEqual(mockToken);
        });
    });

    describe('should return correct error', () => {
        it('when user fails to sign in', () => {
            expect(
                authReducer(undefined, signInFailure(mockError)).error
            ).toEqual(mockError);
        });

        it('when user fails to sign up', () => {
            expect(
                authReducer(undefined, signUpFailure(mockError)).error
            ).toEqual(mockError);
        });

        it('when user fails to refresh access token', () => {
            expect(
                authReducer(undefined, accessTokenFailure(mockError)).error
            ).toEqual(mockError);
        });

        it('when user fails to sign out', () => {
            expect(
                authReducer(undefined, signOutFailure(mockError)).error
            ).toEqual(mockError);
        });
    });
});

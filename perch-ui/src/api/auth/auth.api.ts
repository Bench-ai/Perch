import axios from "../api.config";
import {ApiError, LoginRequest, SignupRequest, TokenResponse} from "../../interfaces/api.interface";
import {API_AUTH_LOGIN, API_AUTH_SIGNUP, LOCAL_STORAGE_TOKEN} from "../../constants/api.constants";

export const signup = async ({username, email, password}: SignupRequest) => {
    try {
        const response = await axios.post(API_AUTH_SIGNUP, {
            username: username,
            email: email,
            password: password
        });
        const DataResponse: TokenResponse = response.data;
        localStorage.setItem(LOCAL_STORAGE_TOKEN, DataResponse.accessToken);
        return DataResponse;
    } catch (e) {
        const message = "Username or email already in use";
        const SignupError: ApiError = {
            message: message
        };
        return SignupError;
    }
}

export const login = async ({username, password}: LoginRequest) => {
    try {
        const response = await axios.post(API_AUTH_LOGIN, {
            username: username,
            password: password
        });
        const DataResponse: TokenResponse = response.data;
        localStorage.setItem(LOCAL_STORAGE_TOKEN, DataResponse.accessToken);
        return DataResponse;
    } catch (e) {
        const message = "Incorrect username or password";
        const LoginError: ApiError = {
            message: message
        };
        return LoginError;
    }
}

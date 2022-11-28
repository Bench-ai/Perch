import axios from "axios";
import {ApiError, LoginRequest, LoginResponse, SignupRequest, SignupResponse} from "../../interfaces/api.interface";
import {API_AUTH_LOGIN, API_AUTH_SIGNUP} from "../../constants/api.constants";

export const signup = async ({username, email, password}: SignupRequest) => {
    try {
        const response = await axios.post(API_AUTH_SIGNUP, {
            username: username,
            email: email,
            password: password
        });
        const DataResponse: SignupResponse = response.data;
        return DataResponse;
    } catch (e) {
        const message = "Incorrect username or password";
        const LoginError: ApiError = {
            message: message
        };
        return LoginError;
    }
}

export const login = async ({username, password}: LoginRequest) => {
    try {
        const response = await axios.post(API_AUTH_LOGIN, {
            username: username,
            password: password
        });
        const DataResponse: LoginResponse = response.data;
        return DataResponse;
    } catch (e) {
        const message = "Incorrect username or password";
        const LoginError: ApiError = {
            message: message
        };
        return LoginError;
    }
}

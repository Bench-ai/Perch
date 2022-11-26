import axios from "axios";
import {API_AUTH_LOGIN, API_AUTH_SIGNUP} from "../../constants/api.constants";

export interface SignupRequest {
    username: string,
    email: string,
    password: string
}

export const signup = async ({username, email, password}: SignupRequest) => {
    try {
        const response = await axios.post(API_AUTH_SIGNUP, {
            username: username,
            email: email,
            password: password
        });
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

export interface LoginRequest {
    username: string,
    password: string
}

export const login = async ({username, password}: LoginRequest) => {
    try {
        const response = await axios.post(API_AUTH_LOGIN, {
            username: username,
            password: password
        });
        return response.data;
    } catch (e) {
        console.error(e);
    }
}


import axios from "../api.config";
import {LoginRequest, SignupRequest} from "../../interfaces";
import {API_AUTH_LOGIN, API_AUTH_SIGNUP} from "../../constants";

export const signup = ({username, email, password}: SignupRequest) => {
     return axios.post(API_AUTH_SIGNUP, {
        username: username,
        email: email,
        password: password
     });
}

export const login = ({username, password}: LoginRequest) => {
    return axios.post(API_AUTH_LOGIN, {
        username: username,
        password: password
    });
}

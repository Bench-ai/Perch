import axios from "axios";
import {API_AUTH_LOGIN, API_AUTH_SIGNUP} from "../../constants/api.constants";

export const signup = async (username: string, email: string, password: string) => {
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

export const login = async (username: string, password: string) => {
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

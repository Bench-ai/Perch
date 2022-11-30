import axios from 'axios';
import {API_AUTH_ACCESS_TOKEN, API_ENDPOINT_PREFIX, LOCAL_STORAGE_TOKEN} from "../constants/api.constants";
import {ApiError} from "../interfaces/api.interface";

export default axios.create({
    baseURL: API_ENDPOINT_PREFIX(),
    headers: {'Content-Type': 'application/json'}
});

export const axiosPrivate = axios.create({
    baseURL: API_ENDPOINT_PREFIX(),
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
});

axiosPrivate.interceptors.request.use((req) => {
        const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);

        if (token) {
            req.headers!.Authorization = `Bearer ${token}`;
        }
        return req;
    }, (err) => Promise.reject(err)
);

axiosPrivate.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        if (err.response.status === 401 && !err.config._retry) {
            try {
                const { data } = await axios.post(API_AUTH_ACCESS_TOKEN, {}, {
                    withCredentials: true
                })

                localStorage.setItem(LOCAL_STORAGE_TOKEN, data.accessToken);
                err.config._retry = true;

                return axiosPrivate(err.config);
            } catch (err) {
                const message = "Token is invalid or expired";
                const TokenError: ApiError = {
                    message: message
                };
                return TokenError;
            }
        }

        return Promise.reject(err);
    }
);

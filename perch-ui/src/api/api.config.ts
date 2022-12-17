import axios from 'axios';
import {credentialsExpiredNotification} from "../components/notification/notification";
import {API_AUTH_ACCESS_TOKEN, API_ENDPOINT_PREFIX } from '../constants';
import {CredentialsExpired} from "../interfaces";

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
        const token = localStorage.getItem('token');

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
                const {data} = await axios.post(API_AUTH_ACCESS_TOKEN, {}, {
                    withCredentials: true
                })

                localStorage.setItem('token', data.accessToken);
                err.config._retry = true;

                return axiosPrivate(err.config);
            } catch (err) {
                const TokenError: CredentialsExpired = {
                    message: "Credentials are Invalid or Expired",
                    expired: true
                };
                credentialsExpiredNotification(TokenError);
                return Promise.reject(TokenError);
            }
        }
        return Promise.reject(err);
    }
);

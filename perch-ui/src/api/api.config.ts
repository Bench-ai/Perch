import axios from 'axios';
import {credentialsExpiredNotification} from "../components/notification/notification";
import {API_ENDPOINT_PREFIX} from '../constants';
import {CredentialsExpired} from "../interfaces";
import {store} from "../app/store";
import {selectCurrentToken} from "../redux/auth/auth.selector";
import { accessTokenStart } from '../redux/auth/auth.action';

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
        const token = selectCurrentToken(store.getState());

        if (token) {
            req.headers!.Authorization = `Bearer ${token.accessToken}`;
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
            store.dispatch(accessTokenStart())
            err.config._retry = true;
            return axiosPrivate(err.config);
        }
        return Promise.reject(err);
    }
);

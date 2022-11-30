import {axiosPrivate} from "../api.config";
import {API_USER_CURRENT} from "../../constants/api.constants";
import {ApiError} from "../../interfaces/api.interface";

export const currentUser = async () => {
    try {
        const response = await axiosPrivate.get(API_USER_CURRENT);
        const DataResponse = response.data;
        return DataResponse;
    } catch (e) {
        const message = "Invalid credentials";
        const UserDetailsError: ApiError = {
            message: message
        };
        return UserDetailsError;
    }
}

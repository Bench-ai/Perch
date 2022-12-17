import {axiosPrivate} from "../api.config";
import {API_USER_BY_ID, API_USER_CURRENT} from "../../constants";

export const currentUser = async () => {
    return await axiosPrivate.get(API_USER_CURRENT);
}

export const userById = async (userId: string) => {
    return await axiosPrivate.get(API_USER_BY_ID(userId))
}

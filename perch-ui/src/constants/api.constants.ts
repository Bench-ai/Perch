//API Endpoint
const API_DEVELOPMENT_PREFIX = "http://localhost:8080";

export const API_ENDPOINT_PREFIX = () => {
    return API_DEVELOPMENT_PREFIX;
}

//Auth API
const API_AUTH_PREFIX = "/api/auth";
export const API_AUTH_LOGIN = API_AUTH_PREFIX + "/login";
export const API_AUTH_SIGNUP = API_AUTH_PREFIX + "/signup";
export const API_AUTH_LOGOUT = API_AUTH_PREFIX + "/logout";
export const API_AUTH_LOGOUT_ALL = API_AUTH_PREFIX + "/logoutAll";
export const API_AUTH_ACCESS_TOKEN = API_AUTH_PREFIX + "/accessToken";
export const API_AUTH_REFRESH_TOKEN = API_AUTH_PREFIX + "/refreshToken";

//User API
const API_USER_PREFIX = "/api/user";
export const API_USER_CURRENT = API_USER_PREFIX + "/currentUser";
export const API_USER_BY_ID = (id: string) => {
    return API_USER_PREFIX + `/${id}`;
}
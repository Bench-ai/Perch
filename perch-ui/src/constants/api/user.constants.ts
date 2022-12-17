const API_USER_PREFIX = "/api/private/user";
export const API_USER_CURRENT = API_USER_PREFIX + "/currentUser";
export const API_USER_BY_ID = (id: string) => {
    return API_USER_PREFIX + `/${id}`;
}

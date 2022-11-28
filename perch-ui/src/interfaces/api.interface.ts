//AUTH

//Requests
export interface SignupRequest {
    username: string,
    email: string,
    password: string
}

export interface LoginRequest {
    username: string,
    password: string
}

//Responses
export interface SignupResponse {
    userId: string,
    accessToken: string,
    refreshToken: string
}

export interface LoginResponse {
    userId: string,
    accessToken: string,
    refreshToken: string
}

export const isLoginResponse = (object: any): object is LoginResponse => {
    return 'userId' in object && 'accessToken' in object && 'refreshToken' in object;
}

//Error
export interface ApiError {
    message: string
}

export const isApiError = (object: any): object is ApiError => {
    return 'message' in object;
}

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

export interface User {
    id: string,
    username: string,
    email: string
}

//Responses
export interface TokenResponse {
    userId: string,
    accessToken: string
}

export const isTokenResponse = (object: any): object is TokenResponse => {
    return 'userId' in object && 'accessToken' in object;
}

//Error
export interface ApiError {
    message: string
}

export const isApiError = (object: any): object is ApiError => {
    return 'message' in object;
}

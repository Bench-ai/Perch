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

//Error
export interface ApiError {
    message: string
}

export const isApiError = (object: any): object is ApiError => {
    return 'message' in object;
}

export interface CredentialsExpired extends ApiError {
    expired: boolean
}

export const isCredentialsExpired = (object: any): object is CredentialsExpired => {
    return 'message' in object && 'expired' in object;
}

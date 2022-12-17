export interface User {
    id: string,
    username: string,
    email: string
}

export const isUser = (object: any): object is User => {
    return 'id' in object && 'username' in object && 'email' in object;
}

export interface Token {
    userId: string | null,
    accessToken: string
}

export const isToken = (object: any): object is Token => {
    return 'userId' in object && 'accessToken' in object;
}

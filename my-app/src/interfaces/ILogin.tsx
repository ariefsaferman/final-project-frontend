export type LoginRequest = {
    email: string; 
    password: string;
}

export type ILoginFailed = {
    email?: string;
    password?: string;
}
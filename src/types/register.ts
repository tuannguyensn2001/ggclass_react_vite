import { IUser } from '~/models/IUser';

export interface RegisterForm {
    email: string;
    password: string;
    password_repeat: string;
    username: string;
}
export interface RegisterResponse {
    data: object;
    message: string;
}

import { LoginForm } from '~/types/login';
import API from '~/network/API';
import { RegisterForm } from '~/types/register';

export const fetchLogin = (data: LoginForm) => {
    return API.post('/v1/auth/login', data);
};
export const fetchRegister = (data: RegisterForm) => {
    return API.post('/v1/auth/register', data);
};

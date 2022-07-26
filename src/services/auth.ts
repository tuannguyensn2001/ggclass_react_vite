import { LoginForm } from '~/types/login';
import API from '~/network/API';

export const fetchLogin = (data: LoginForm) => {
    return API.post('/v1/auth/login', data);
};

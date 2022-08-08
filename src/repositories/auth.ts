import { LoginForm, LoginResponse } from '~/types/login';
import { ResponseAPI } from '~/app/response';
import { fetchLogin, fetchRegister } from '~/services/auth';
import { RegisterForm, RegisterResponse } from '~/types/register';

export const getLogin = async (data: LoginForm): Promise<ResponseAPI<LoginResponse>> => {
    const response = await fetchLogin(data);
    return response.data;
};
export const getRegister = async (data: RegisterForm): Promise<ResponseAPI<RegisterResponse>> => {
    const response = await fetchRegister(data);
    return response.data;
};

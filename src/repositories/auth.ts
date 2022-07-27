import { LoginForm, LoginResponse } from '~/types/login';
import { ResponseAPI } from '~/app/response';
import { fetchLogin } from '~/services/auth';

export const getLogin = async (data: LoginForm): Promise<ResponseAPI<LoginResponse>> => {
    const response = await fetchLogin(data);
    return response.data;
};

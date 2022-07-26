import { ResponseAPI } from '~/app/response';
import { fetchCreateClass } from '~/services/class';
import { CreateClassForm } from '~/types/class';

export const getCreate = async (data: CreateClassForm): Promise<ResponseAPI> => {
    const response = await fetchCreateClass(data);
    return response.data;
};

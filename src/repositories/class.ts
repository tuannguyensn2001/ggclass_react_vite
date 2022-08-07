import { ResponseAPI } from '~/app/response';
import { fetchCreateClass, fetchDetailClass, fetchRole, fetchRoles } from '~/services/class';
import { CreateClassForm, GetRoleResponse } from '~/types/class';
import { IClass } from '~/models/IClass';
import { Role } from '~/enums/role';

export const getCreate = async (data: CreateClassForm): Promise<ResponseAPI> => {
    const response = await fetchCreateClass(data);
    return response.data;
};

export const getRoles = async (): Promise<GetRoleResponse> => {
    const response = await fetchRoles();
    return response.data.data;
};

export const getDetailClass = async (classId: number): Promise<IClass> => {
    const response = await fetchDetailClass(classId);
    return response.data.data;
};

export const getRole = async (classId: number): Promise<Role> => {
    const response = await fetchRole(classId);
    return response.data.data;
};

import { CreateClassForm } from '~/types/class';
import API from '~/network/API';

export const fetchCreateClass = (classes: CreateClassForm) => {
    return API.post('/v1/classes', classes);
};

export const fetchRoles = () => {
    return API.get('/v1/classes/roles');
};

export const fetchDetailClass = (classId: number) => {
    return API.get(`/v1/classes/${classId}`);
};

export const fetchRole = (classId: number) => {
    return API.get(`/v1/classes/${classId}/role`);
};

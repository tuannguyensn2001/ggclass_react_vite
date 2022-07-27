import { CreateClassForm } from '~/types/class';
import API from '~/network/API';

export const fetchCreateClass = (classes: CreateClassForm) => {
    return API.post('/v1/classes', classes);
};

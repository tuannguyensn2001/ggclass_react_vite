import { FormLessonType } from '~/types/lesson';
import { ResponseAPI } from '~/app/response';
import { fetchCreateLesson, fetchGetLessonByFolder } from '~/services/lesson';
import { ILesson } from '~/models/ILesson';
import API from '~/network/API';

export const getCreateLesson = async (data: FormLessonType): Promise<ResponseAPI> => {
    const response = await fetchCreateLesson(data);
    return response.data;
};

export const getLessonByFolderId = async (folderId: number): Promise<ILesson[]> => {
    const response = await fetchGetLessonByFolder(folderId);
    return response.data.data;
};

export const getLessonById = async (id: number): Promise<ILesson> => {
    const response = await API.get(`/v1/lessons/${id}`);
    return response.data.data;
};

export const getUpdateLesson = async (id: number, data: FormLessonType): Promise<ResponseAPI> => {
    const response = await API.put(`/v1/lessons/${id}`, data);
    return response.data;
};

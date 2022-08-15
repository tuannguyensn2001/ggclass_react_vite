import { FormLessonType } from '~/types/lesson';
import API from '~/network/API';

export const fetchCreateLesson = (data: FormLessonType) => {
    return API.post('/v1/lessons', data);
};

export const fetchGetLessonByFolder = (folderId: number) => {
    return API.get(`/v1/lessons`, {
        params: {
            folderId,
        },
    });
};

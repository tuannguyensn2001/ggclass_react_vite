import API from '~/network/API';

export const fetchCreateFolder = (classId: number, name: string) => {
    return API.post('/v1/folders', {
        classId,
        name,
    });
};
export const fetchGetALlFolder = (classId: number) => {
    return API.get('/v1/folders', {
        params: {
            classId,
        },
    });
};

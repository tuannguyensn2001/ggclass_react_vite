import { fetchCreateFolder, fetchGetALlFolder } from '~/services/folder';

export const getCreateFolder = async (classId: number, name: string) => {
    const response = await fetchCreateFolder(classId, name);
    return response.data;
};

export const getAllFolder = async (classId: number) => {
    const response = await fetchGetALlFolder(classId);
    return response.data;
};

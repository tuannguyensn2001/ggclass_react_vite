import API from '~/network/API';

export const fetchPostByClass = (classId: number) => {
    return API.get(`/v1/classes/${classId}/posts`);
};

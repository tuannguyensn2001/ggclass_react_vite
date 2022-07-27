import { ResponseAPI } from '~/app/response';
import { IPost } from '~/models/IPost';
import { fetchPostByClass } from '~/services/post';

export const getPostByClassId = async (classId: number): Promise<ResponseAPI<IPost[]>> => {
    const response = await fetchPostByClass(classId);
    return response.data;
};

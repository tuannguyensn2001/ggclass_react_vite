import { getMultipleChoiceCloneOutput } from '~/types/exercise_clone';
import API from '~/network/API';

export const getMultipleChoiceClone = async (id: number): Promise<getMultipleChoiceCloneOutput> => {
    const response = await API.get(`/v1/exercises/clone/multiple-choice/${id}`);
    return response.data.data;
};

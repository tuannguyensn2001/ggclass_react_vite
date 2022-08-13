import { fetchStart, fetchSubmitMultipleChoice } from '~/services/assignment';
import { IAssignment } from '~/models/IAssignment';
import { SubmitMultipleChoiceTestInterface } from '~/types/assignment';

export const getStart = async (exerciseId: number): Promise<IAssignment> => {
    const response = await fetchStart(exerciseId);
    return response.data.data;
};

export const getSubmitMultipleChoice = async (data: SubmitMultipleChoiceTestInterface) => {
    const response = await fetchSubmitMultipleChoice(data);
    return response.data.data;
};

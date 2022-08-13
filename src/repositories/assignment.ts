import { fetchScoreInClass, fetchStart, fetchSubmitMultipleChoice } from '~/services/assignment';
import { IAssignment } from '~/models/IAssignment';
import { ScoreInterface, SubmitMultipleChoiceTestInterface } from '~/types/assignment';

export const getStart = async (exerciseId: number): Promise<IAssignment> => {
    const response = await fetchStart(exerciseId);
    return response.data.data;
};

export const getSubmitMultipleChoice = async (data: SubmitMultipleChoiceTestInterface) => {
    const response = await fetchSubmitMultipleChoice(data);
    return response.data.data;
};

export const getScoreInClass = async (classId: number): Promise<ScoreInterface[]> => {
    const response = await fetchScoreInClass(classId);
    return response.data.data;
};

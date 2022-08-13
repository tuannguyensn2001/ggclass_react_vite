import API from '~/network/API';
import { SubmitMultipleChoiceTestInterface } from '~/types/assignment';

export const fetchStart = (exerciseId: number) => {
    return API.post('/v1/assignments/start', { exerciseId: exerciseId });
};

export const fetchSubmitMultipleChoice = (data: SubmitMultipleChoiceTestInterface) => {
    return API.post('/v1/assignments/submit/multiple-choice', data);
};

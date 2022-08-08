import { FormMultipleChoiceInterface } from '~/types/exercise';
import API from '~/network/API';

export const fetchCreateMultipleChoiceExercise = (data: FormMultipleChoiceInterface) => {
    return API.post('/v1/exercises/multiple-choice', data);
};

export const fetchExercisesByClass = (classId: number) => {
    return API.get('/v1/exercises', {
        params: {
            classId,
        },
    });
};

export const fetchMultipleChoiceExerciseDetail = (id: number) => {
    return API.get(`/v1/exercises/multiple-choice/${id}/edit`);
};

export const fetchUpdateMultipleChoice = (id: number, data: FormMultipleChoiceInterface) => {
    return API.put(`/v1/exercises/multiple-choice/${id}`, data);
};

import {
    fetchCreateMultipleChoiceExercise,
    fetchExercisesByClass,
    fetchMultipleChoiceExerciseDetail,
    fetchUpdateMultipleChoice,
} from '~/services/exercise';
import { FormMultipleChoiceInterface } from '~/types/exercise';
import { ResponseAPI } from '~/app/response';
import { IExercise } from '~/models/IExercise';

export const getCreateMultipleChoice = async (data: FormMultipleChoiceInterface): Promise<ResponseAPI> => {
    const response = await fetchCreateMultipleChoiceExercise(data);
    return response.data;
};

export const getExercisesByClass = async (classId: number): Promise<IExercise[]> => {
    const response = await fetchExercisesByClass(classId);
    return response.data.data;
};

export const getMultipleChoiceExerciseDetail = async (exerciseId: number): Promise<FormMultipleChoiceInterface> => {
    const response = await fetchMultipleChoiceExerciseDetail(exerciseId);
    const data = response.data.data;
    return {
        ...data,
        isTest: data?.isTest === 1 ? true : false,
        preventViewQuestion: data?.preventViewQuestion === 1 ? true : false,
    };
};

export const getUpdateMultipleChoice = async (id: number, data: FormMultipleChoiceInterface): Promise<ResponseAPI> => {
    const response = await fetchUpdateMultipleChoice(id, data);
    return response.data;
};

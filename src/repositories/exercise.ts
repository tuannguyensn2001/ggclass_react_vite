import { fetchCreateMultipleChoiceExercise, fetchExercisesByClass } from '~/services/exercise';
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

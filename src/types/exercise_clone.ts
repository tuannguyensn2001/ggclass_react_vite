import { IExercise } from '~/models/IExercise';

export interface getMultipleChoiceCloneOutput {
    exercise: IExercise;
    multipleChoice: {
        id: number;
        numberOfQuestions: number;
        mark: number;
        fileQuestionUrl: string;
        createdAt: string;
        updatedAt: string;
    };
    answerIds: number[];
}

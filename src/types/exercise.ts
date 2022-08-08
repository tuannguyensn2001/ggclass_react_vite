import { IExercise } from '~/models/IExercise';

export interface FormMultipleChoiceInterface extends IExercise {
    multipleChoice: {
        numberOfQuestions: string | number;
        mark: string | number;
        answers: FormMultipleChoiceAnswerItemInterface[];
        fileQuestionUrl: string;
    };
    answers: FormMultipleChoiceAnswerItemInterface[];
}

export interface FormMultipleChoiceAnswerItemInterface {
    answer: string;
    mark: number | string;
    id?: string;
    order?: number;
}

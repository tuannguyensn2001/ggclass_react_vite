export type FormMultipleChoiceInterface = {
    multipleChoice: {
        numberOfQuestions: string;
        mark: string;
    };
    answers: FormMultipleChoiceAnswerItemInterface[];
};

export interface FormMultipleChoiceAnswerItemInterface {
    answer: string;
    mark: number;
    id: string;
}

export interface SubmitMultipleChoiceTestInterface {
    assignmentId: number;
    answers: { id: number; answer: string }[];
}

export interface ScoreInterface {
    name: string;
    avatar: string;
    id: number;
    scores: {
        id: number;
        mark: number;
    }[];
    average: number;
}

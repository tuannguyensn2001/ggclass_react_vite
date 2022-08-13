import { FormMultipleChoiceAnswerItemInterface } from '~/types/exercise';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { getMultipleChoiceClone } from '~/repositories/exercise_clone';
import { IExercise } from '~/models/IExercise';
import dayjs from '~/packages/dayjs';
import { getStart, getSubmitMultipleChoice } from '~/repositories/assignment';
import { SubmitMultipleChoiceTestInterface } from '~/types/assignment';

interface MultipleChoiceTestStore {
    answers: FormMultipleChoiceAnswerItemInterface[];
    initAnswers: (ids: number[]) => void;
    isSubmit: boolean;
    isInit: boolean;
    init: (id: number, test?: boolean) => void;
    id: number;
    exercise: IExercise | undefined;
    deadLine: string | undefined;
    timeLeft: number;
    setTimeLeft: () => void;
    changeAnswer: (index: number, answer: string) => void;
    leave: () => void;
    isLoading: boolean;
    assignmentId: number;
    submit: () => void;
    reset: () => void;
}

const useMultipleChoiceTestStore = create<MultipleChoiceTestStore>()(
    devtools(
        immer(
            persist(
                (set, get) => ({
                    answers: [],
                    isSubmit: false,
                    isInit: false,
                    id: 0,
                    deadLine: '',
                    exercise: undefined,
                    isLoading: false,
                    timeLeft: 0,
                    assignmentId: -1,
                    initAnswers: (ids: number[]) => {
                        const map: FormMultipleChoiceAnswerItemInterface[] = ids.map(
                            (item, index) => ({
                                id: item.toString(),
                                order: index,
                                answer: '',
                                mark: '',
                            }),
                        );

                        set((state) => {
                            state.answers = map;
                        });
                    },
                    init: async function (id: number, teacherTest = true) {
                        if (!teacherTest) {
                            if (get().isInit) {
                                const deadline = dayjs(get().deadLine, 'HH:mm:ss DD/MM/YYYY');
                                const diff = deadline.diff(dayjs(), 'seconds');

                                set((state) => {
                                    state.timeLeft = diff;
                                });
                                return;
                            }
                        }

                        try {
                            set((state) => {
                                state.isLoading = true;
                            });
                            const responseStart = await getStart(id);
                            set((state) => {
                                state.assignmentId = responseStart.id;
                            });
                            const response = await getMultipleChoiceClone(
                                responseStart.exerciseCloneId,
                            );
                            const ids = response?.answerIds;
                            if (!ids || !Array.isArray(ids)) return;
                            const map: FormMultipleChoiceAnswerItemInterface[] = ids.map(
                                (item, index) => ({
                                    id: item.toString(),
                                    order: index,
                                    answer: '',
                                    mark: '',
                                }),
                            );

                            set((state) => {
                                state.answers = map;
                                state.id = id;
                                state.exercise = response?.exercise;
                                if (!!response?.exercise?.timeToDo) {
                                    const minutes = response?.exercise.timeToDo;

                                    state.deadLine = dayjs()
                                        .add(Number(minutes), 'minutes')
                                        .format('HH:mm:ss DD/MM/YYYY');

                                    const deadline = dayjs().add(Number(minutes), 'minutes');
                                    const diff = deadline.diff(dayjs(), 'seconds');

                                    state.timeLeft = diff;
                                }
                            });
                            if (!teacherTest) {
                                set((state) => {
                                    state.isInit = true;
                                });
                            }
                        } catch (e) {
                        } finally {
                            set((state) => {
                                state.isLoading = false;
                            });
                        }
                    },
                    setTimeLeft: () => {
                        set((state) => {
                            if (state.timeLeft >= 0) {
                                state.timeLeft--;
                            }
                        });
                    },
                    changeAnswer: (index: number, value: string) => {
                        set((state) => {
                            state.answers[index].answer = value;
                        });
                    },
                    leave: () => {
                        set((state) => {
                            state.isInit = false;
                            state.deadLine = '';
                            state.timeLeft = 0;
                            state.id = 0;
                            state.answers = [];
                        });
                    },
                    async submit() {
                        const data: SubmitMultipleChoiceTestInterface = {
                            assignmentId: get().assignmentId,
                            answers: get().answers.map((item) => ({
                                id: Number(item.id),
                                answer: item.answer,
                            })),
                        };

                        const response = await getSubmitMultipleChoice(data);

                        set((state) => {
                            state.isInit = false;
                            state.deadLine = '';
                            state.timeLeft = 0;
                            state.id = 0;
                            state.answers = [];
                            state.isSubmit = true;
                        });
                    },
                    reset() {
                        set((state) => {
                            state.isInit = false;
                            state.deadLine = '';
                            state.timeLeft = 0;
                            state.id = 0;
                            state.answers = [];
                            state.isSubmit = false;
                            state.assignmentId = -1;
                        });
                    },
                }),
                {
                    name: 'multiple-choice-test',
                },
            ),
        ),
    ),
);
export default useMultipleChoiceTestStore;

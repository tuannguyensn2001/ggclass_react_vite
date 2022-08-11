import { FormMultipleChoiceAnswerItemInterface } from '~/types/exercise';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { getMultipleChoiceClone } from '~/repositories/exercise_clone';
import { IExercise } from '~/models/IExercise';
import dayjs from '~/packages/dayjs';

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
                    timeLeft: 0,
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
                                const deadline = dayjs(get().deadLine, 'hh:mm:ss DD/MM/YYYY');
                                const diff = deadline.diff(dayjs(), 'seconds');

                                set((state) => {
                                    state.timeLeft = Math.abs(diff);
                                });
                                return;
                            }
                        }

                        try {
                            const response = await getMultipleChoiceClone(id);
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
                                    // console.log(dayjs().add(180, 'minutes'));

                                    state.deadLine = dayjs()
                                        .add(Number(minutes), 'minutes')
                                        .format('hh:mm:ss DD/MM/YYYY');

                                    const deadline = dayjs().add(Number(minutes), 'minutes');
                                    const diff = deadline.diff(dayjs(), 'seconds');

                                    console.log(diff);

                                    state.timeLeft = Math.abs(diff);
                                }
                            });
                            if (!teacherTest) {
                                set((state) => {
                                    state.isInit = true;
                                });
                            }
                        } catch (e) {}
                    },
                    setTimeLeft: () => {
                        set((state) => {
                            state.timeLeft--;
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
                }),
                {
                    name: 'multiple-choice-test',
                },
            ),
        ),
    ),
);
export default useMultipleChoiceTestStore;

import { useNavigate, useParams } from 'react-router-dom';
import useMultipleChoiceTestStore from '~/store/useMultipleChoiceTestStore';
import { useEffect, useMemo, useRef, useState } from 'react';
import PreviewFileMultipleChoice from '~/components/PreviewFileMultipleChoice';
import TimeLeftMultipleChoice from '~/components/TimeLeftMultipleChoice';
import clsx from 'clsx';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import dayjs from '~/packages/dayjs';

function DoMultipleChoiceTest() {
    const { exerciseId, id } = useParams();

    const init = useMultipleChoiceTestStore((state) => state.init);
    const setTimeLeft = useMultipleChoiceTestStore((state) => state.setTimeLeft);
    const isSubmit = useMultipleChoiceTestStore((state) => state.isSubmit);
    const idInterval = useRef<NodeJS.Timer | null>(null);
    const answers = useMultipleChoiceTestStore((state) => state.answers);
    const [active, setActive] = useState<number>(0);
    const changeAnswer = useMultipleChoiceTestStore((state) => state.changeAnswer);
    const leave = useMultipleChoiceTestStore((state) => state.leave);
    const timeLeft = useMultipleChoiceTestStore((state) => state.timeLeft);
    const submit = useMultipleChoiceTestStore((state) => state.submit);
    const assigmentId = useMultipleChoiceTestStore((state) => state.assignmentId);
    const reset = useMultipleChoiceTestStore((state) => state.reset);
    const isInit = useMultipleChoiceTestStore((state) => state.isInit);
    const navigate = useNavigate();

    useEffect(() => {
        if (!exerciseId) return;
        init(Number(exerciseId), false);
    }, [exerciseId]);

    useEffect(() => {
        const id = setInterval(() => setTimeLeft(), 1000);
        idInterval.current = id;
        return () => {
            clearInterval(id);
        };
    }, []);

    useEffect(() => {
        if (isSubmit && !!idInterval.current) {
            clearInterval(idInterval.current);
        }
        if (isSubmit) {
            console.log('true', isSubmit);
            navigate(`/class/${id}/assignment/${assigmentId}/detail`);
            reset();
        }
    }, [isSubmit]);

    useEffect(() => {
        // if (timeLeft === 0) {
        //     if (!!idInterval.current) {
        //         clearInterval(idInterval.current);
        //     }
        // }
        if (timeLeft === 0 && !isSubmit && isInit) {
            if (!!idInterval.current) {
                clearInterval(idInterval.current);
            }
        }
    }, [timeLeft, isSubmit, isInit]);

    const handleLeave = () => {
        leave();
        navigate(`/class/${id}/homework`);
    };

    return (
        <div className={'tw-grid tw-grid-cols-12 tw-h-screen'}>
            <div className={'tw-col-span-7'}>
                <PreviewFileMultipleChoice isFullScreen />
            </div>
            <div className="tw-col-span-5">
                <div className={'tw-flex tw-flex-col tw-justify-between tw-h-full'}>
                    <div
                        className={'tw-bg-blue-900 tw-py-5 tw-flex tw-justify-center tw-text-white'}
                    >
                        <div>
                            <div>Thoi gian con lai</div>
                            <div className={'tw-flex tw-justify-center'}>
                                <TimeLeftMultipleChoice />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={'tw-w-full tw-text-center tw-font-bold'}>
                            Cau {active + 1}
                        </div>
                        <div className={'tw-flex tw-mt-10'}>
                            <div className="tw-flex tw-justify-center tw-w-full">
                                {answers.map((item, index) => (
                                    <div
                                        onClick={() => setActive(index)}
                                        className={clsx([
                                            'tw-border-2 tw-border-solid tw-border-gray-300  tw-mx-2 tw-w-4 tw-h-4 tw-p-2 tw-cursor-pointer',
                                            {
                                                'tw-border-blue-800 tw-border-3': active === index,
                                            },
                                        ])}
                                        key={item.id}
                                    >
                                        <div className={'tw-text-center'}>{index + 1}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={'tw-flex tw-justify-center tw-mt-5'}>
                            <TextField
                                value={answers[active]?.answer}
                                onChange={(event) => changeAnswer(active, event.target.value)}
                            />
                        </div>
                    </div>
                    <div className={'tw-flex tw-justify-center tw-mb-10'}>
                        <Button variant={'outlined'} onClick={handleLeave}>
                            Roi khoi
                        </Button>
                        <div className="tw-ml-4">
                            <Button onClick={submit} variant={'contained'}>
                                Nop bai
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoMultipleChoiceTest;

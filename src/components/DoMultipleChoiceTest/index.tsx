import { useNavigate, useParams } from 'react-router-dom';
import useMultipleChoiceTestStore from '~/store/useMultipleChoiceTestStore';
import { useEffect, useMemo, useRef, useState } from 'react';
import PreviewFileMultipleChoice from '~/components/PreviewFileMultipleChoice';
import TimeLeftMultipleChoice from '~/components/TimeLeftMultipleChoice';
import clsx from 'clsx';

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
    const navigate = useNavigate();

    useEffect(() => {
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
    }, [isSubmit]);

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
                <div className={'tw-bg-blue-500'}>
                    <div>THoi gian con lai</div>
                    <TimeLeftMultipleChoice />
                </div>
                <div>
                    <div className={'tw-flex tw-mt-10'}>
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
                    <div>
                        <input
                            type="text"
                            value={answers[active].answer}
                            onChange={(event) => changeAnswer(active, event.target.value)}
                        />
                    </div>

                    <div>
                        <button onClick={handleLeave}>Roi khoi</button>
                        <button>Nop bai</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoMultipleChoiceTest;

import PreviewFileMultipleChoice from '~/components/PreviewFileMultipleChoice';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useMultipleChoiceTestStore from '~/store/useMultipleChoiceTestStore';

function TestMultipleChoice() {
    const { exerciseId } = useParams();

    const init = useMultipleChoiceTestStore((state) => state.init);

    useEffect(() => {
        init(Number(exerciseId));
    }, [exerciseId]);

    return (
        <div className={'tw-grid tw-grid-cols-12 tw-h-screen'}>
            <div className={'tw-col-span-7'}>
                <PreviewFileMultipleChoice isFullScreen />
            </div>
            <div className="tw-col-span-5">
                <div className={'tw-bg-blue-500'}>
                    <div>THoi gian con lai</div>
                </div>
            </div>
        </div>
    );
}

export default TestMultipleChoice;

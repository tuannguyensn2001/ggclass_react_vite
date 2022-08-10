import useMultipleChoiceTestStore from '~/store/useMultipleChoiceTestStore';
import { useMemo } from 'react';

function TimeLeftMultipleChoice() {
    const timeLeft = useMultipleChoiceTestStore((state) => state.timeLeft);

    const timeLeftConvert = useMemo<string>(() => {
        if (!timeLeft) return '';
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft - minutes * 60;
        return `${minutes}:${seconds}`;
    }, [timeLeft]);

    return <div>{timeLeftConvert}</div>;
}

export default TimeLeftMultipleChoice;

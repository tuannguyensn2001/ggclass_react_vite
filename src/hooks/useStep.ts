import { useCallback, useState } from 'react';

export default function useStep(min: number = 1, max: number = 3) {
    const [step, setStep] = useState<number>(1);

    const previous = useCallback(() => {
        setStep((prevState) => {
            if (prevState === min) return prevState;
            return prevState - 1;
        });
    }, []);

    const next = useCallback(() => {
        setStep((prevState) => {
            if (prevState === max) return prevState;
            return prevState + 1;
        });
    }, []);

    return {
        step,
        previous,
        next,
    };
}

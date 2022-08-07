import HeaderHomework from '~/components/HeaderHomework';
import clsx from 'clsx';
import HomeworkStepItem from '~/components/HomeworkStepItem';
import { useCallback, useState } from 'react';
import useStep from '~/hooks/useStep';
import HeaderStepHomework from '~/components/HeaderStepHomework';
import PreviewFileMultipleChoice from '~/components/PreviewFileMultipleChoice';
import FormMultipleChoice from '~/components/FormMultipleChoice';

function MultipleChoiceForm() {
    const { step, previous, next } = useStep();

    const handleComplete = useCallback(() => {
        console.log('complete');
    }, []);

    return (
        <div>
            <HeaderHomework
                showComplete={step === 3}
                handleComplete={handleComplete}
                handlePrevious={previous}
                handleNext={next}
            />

            <div>
                <div className={'tw-grid tw-grid-cols-12 tw-gap-3'}>
                    <div className="tw-col-span-6">
                        <PreviewFileMultipleChoice />
                    </div>
                    <div className={'tw-col-span-6'}>
                        <div>
                            <HeaderStepHomework step={step} />
                        </div>
                        <div>
                            <FormMultipleChoice />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MultipleChoiceForm;

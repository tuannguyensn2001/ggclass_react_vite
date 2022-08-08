import HeaderHomework from '~/components/HeaderHomework';
import { useCallback, useEffect, useState } from 'react';
import useStep from '~/hooks/useStep';
import HeaderStepHomework from '~/components/HeaderStepHomework';
import PreviewFileMultipleChoice from '~/components/PreviewFileMultipleChoice';
import FormMultipleChoice from '~/components/FormMultipleChoice';
import { useForm, FormProvider } from 'react-hook-form';
import { FormMultipleChoiceInterface } from '~/types/exercise';
import FormExercise from '~/components/FormExercise';

function MultipleChoiceForm() {
    const { step, previous, next } = useStep();

    const handleComplete = useCallback(() => {
        console.log('complete');
    }, []);

    const methods = useForm<FormMultipleChoiceInterface>({
        defaultValues: {
            multipleChoice: {
                mark: '10',
                numberOfQuestions: '',
            },
            answers: [],
        },
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    return (
        <FormProvider {...methods}>
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
                        <div>{step === 1 && <FormMultipleChoice />}</div>
                        {step === 3 && <FormExercise />}
                    </div>
                </div>
            </div>
        </FormProvider>
    );
}

export default MultipleChoiceForm;

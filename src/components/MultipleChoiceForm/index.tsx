import HeaderHomework from '~/components/HeaderHomework';
import { useCallback, useEffect, useState } from 'react';
import useStep from '~/hooks/useStep';
import HeaderStepHomework from '~/components/HeaderStepHomework';
import PreviewFileMultipleChoice from '~/components/PreviewFileMultipleChoice';
import FormMultipleChoice from '~/components/FormMultipleChoice';
import { useForm, FormProvider } from 'react-hook-form';
import { FormMultipleChoiceInterface } from '~/types/exercise';
import FormExercise from '~/components/FormExercise';
import { RoleStudent } from '~/enums/role_student';
import { ExerciseMode } from '~/enums/exercise';
import { useMutation, useQuery } from 'react-query';
import {
    getCreateMultipleChoice,
    getMultipleChoiceExerciseDetail,
    getUpdateMultipleChoice,
} from '~/repositories/exercise';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function MultipleChoiceForm() {
    const { step, previous, next } = useStep();

    const navigate = useNavigate();
    const { mutate } = useMutation('create', (data: FormMultipleChoiceInterface) => getCreateMultipleChoice(data), {
        onSuccess() {
            navigate(`/class/${id}/homework`);
            toast.success('Them moi bai tap thanh cong');
        },
    });

    const { mutate: mutateUpdate } = useMutation(
        'edit',
        (data: FormMultipleChoiceInterface) => getUpdateMultipleChoice(Number(exerciseId), data),
        {
            onSuccess() {
                navigate(`/class/${id}/homework`);
                toast.success('Chinh sua bai tap thanh cong');
            },
        },
    );

    const { id, exerciseId } = useParams();

    const { data } = useQuery(['detail', exerciseId], () => getMultipleChoiceExerciseDetail(Number(exerciseId)), {
        onSuccess(response) {
            methods.reset({
                ...response,

                answers: response.multipleChoice.answers,
            });
        },
    });

    const handleComplete = useCallback((data: FormMultipleChoiceInterface) => {
        data.classId = Number(id);
        data.multipleChoice.answers = data.answers;
        data.multipleChoice.mark = Number(data.multipleChoice.mark);
        data.multipleChoice.numberOfQuestions = Number(data.multipleChoice.numberOfQuestions);
        data.multipleChoice.answers = data.answers.map((item, index) => ({
            ...item,
            order: index + 1,
        }));
        data.preventViewQuestion = data.preventViewQuestion ? 1 : 0;
        data.isTest = data.isTest ? 1 : 0;
        data.roleStudent = Number(data.roleStudent);
        data.mode = Number(data.mode);

        if (Boolean(data?.id)) {
            mutateUpdate(data);
        } else {
            mutate(data);
        }
    }, []);

    const handleNext = useCallback(async () => {
        if (step === 1) {
            const { trigger } = methods;
            const hasError =
                (
                    await Promise.all([
                        trigger('multipleChoice.mark'),
                        trigger('multipleChoice.numberOfQuestions'),
                        trigger('answers'),
                    ])
                ).filter((item) => !item).length > 0;

            if (hasError) return;
        }

        next();
    }, []);

    const methods = useForm<FormMultipleChoiceInterface>({
        defaultValues: {
            multipleChoice: {
                mark: '10',
                numberOfQuestions: '',
            },
            answers: [],
            preventViewQuestion: false,
            isTest: true,
            roleStudent: RoleStudent.ONLY_VIEW_MARK,
            numberOfTimeToDo: 1,
            mode: ExerciseMode.GET_MARK_FOR_FIRST_TIME_TO_DO,
            timeStart: null,
            timeEnd: null,
            password: '',
            name: '',
            timeToDo: 90,
        },
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    return (
        <FormProvider {...methods}>
            <HeaderHomework
                showComplete={step === 3}
                handleComplete={methods.handleSubmit(handleComplete)}
                handlePrevious={previous}
                handleNext={handleNext}
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

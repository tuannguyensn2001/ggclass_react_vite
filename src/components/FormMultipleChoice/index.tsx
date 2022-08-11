import TextField from '@mui/material/TextField';
import { useFormContext, Controller, useFieldArray, useWatch } from 'react-hook-form';
import { FormMultipleChoiceAnswerItemInterface, FormMultipleChoiceInterface } from '~/types/exercise';
import FormMultipleChoiceItem from '~/components/FormMultipleChoiceItem';
import { useCallback, useEffect, useRef, useState } from 'react';
import uniqueId from 'lodash/uniqueId';
import { memo } from 'react';
import { useQuery } from 'react-query';
import { getMultipleChoiceExerciseDetail } from '~/repositories/exercise';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';
function FormMultipleChoice() {
    const { control, watch, setValue, getValues, register } = useFormContext<FormMultipleChoiceInterface>();

    const { fields, insert } = useFieldArray({
        control: control,
        name: 'answers',
    });

    useEffect(() => {
        register('answers');
    }, [register]);

    const origin = useRef<FormMultipleChoiceAnswerItemInterface[]>([]);

    const [active, setActive] = useState<number>(0);

    const { exerciseId } = useParams();

    const { data } = useQuery(['detail', exerciseId], () => getMultipleChoiceExerciseDetail(Number(exerciseId)), {
        onSuccess(response) {
            response?.multipleChoice.answers.forEach((item, index) => {
                origin.current[index] = {
                    ...origin.current[index],
                    ...item,
                };
            });
        },
    });

    useEffect(() => {
        for (let i = 0; i < 50; i++) {
            origin.current[i] = {
                id: uniqueId(),
                answer: '',
                mark: 0,
            };
        }
    }, []);

    const handleChangeNumberOfQuestion = useCallback((numberOfQuestion: number) => {
        const number = Number(numberOfQuestion);
        const mark = Number(getValues('multipleChoice.mark'));
        const unit = mark / number;

        if (number > 50) return;

        const result: FormMultipleChoiceAnswerItemInterface[] = [];

        for (let i = 0; i < number; i++) {
            const item: FormMultipleChoiceAnswerItemInterface = origin.current[i];
            item.mark = unit;
            result.push(item);
        }

        setValue('answers', result);
    }, []);

    const handleChangeTotalMark = useCallback((totalMark: number) => {
        const numberOfQuestion = Number(getValues('multipleChoice.numberOfQuestions'));
        const unit = totalMark / numberOfQuestion;

        const current = getValues('answers').map((item) => ({
            ...item,
            mark: unit,
        }));

        setValue('answers', current);
    }, []);

    const handleEmitChange = useCallback((index: number, key: 'answer' | 'mark', value: string) => {
        origin.current[index] = {
            ...origin.current[index],
            [key]: value,
        };

        let sum = 0;

        const numberOfQuestion = Number(getValues('multipleChoice.numberOfQuestions'));

        for (let i = 0; i < Number(numberOfQuestion); i++) {
            sum += Number(origin.current[i].mark);
        }

        setValue('multipleChoice.mark', `${sum}`);
    }, []);

    return (
        <div>
            <div className={'tw-mt-4 tw-flex tw-shadow tw-pb-4'}>
                <div>
                    <Controller
                        rules={{
                            max: {
                                value: 50,
                                message: 'Không quá 50 câu',
                            },
                            required: 'Không được để trống',
                        }}
                        control={control}
                        name={'multipleChoice.numberOfQuestions'}
                        render={({ field, fieldState: { error, invalid } }) => (
                            <TextField
                                helperText={error?.message}
                                error={invalid}
                                label={'Số câu'}
                                value={field.value}
                                onChange={(event) => {
                                    handleChangeNumberOfQuestion(Number(event.target.value));
                                    field.onChange(event.target.value);
                                }}
                                // onChange={field.onChange}
                                type={'number'}
                            />
                        )}
                    />
                </div>
                <div className={'tw-ml-5'}>
                    <Controller
                        control={control}
                        name={'multipleChoice.mark'}
                        render={({ field }) => (
                            <TextField
                                label={'Tổng điểm'}
                                {...field}
                                onChange={(event) => {
                                    handleChangeTotalMark(Number(event.target.value));
                                    field.onChange(event);
                                }}
                                type={'number'}
                            />
                        )}
                    />
                </div>
            </div>
            <div>
                <div className={'tw-mt-2'}>
                    <div className={styles.listForm}>
                        <div className={'tw-grid tw-grid-cols-3 tw-gap-4'}>
                            {fields.map((item, index) => (
                                <FormMultipleChoiceItem
                                    setActive={setActive}
                                    emitChange={handleEmitChange}
                                    key={item.id}
                                    active={index === active}
                                    order={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(FormMultipleChoice);

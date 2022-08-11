import { Controller, useFormContext } from 'react-hook-form';
import clsx from 'clsx';
import { FormMultipleChoiceAnswerItemInterface, FormMultipleChoiceInterface } from '~/types/exercise';
import TextField from '@mui/material/TextField';
import { memo } from 'react';

interface Prop {
    active: boolean;
    order: number;
    emitChange: (index: number, key: 'answer' | 'mark', value: string) => void;
    setActive: (index: number) => void;
}

function FormMultipleChoiceItem({ active, order, emitChange, setActive }: Prop) {
    const { control } = useFormContext<FormMultipleChoiceInterface>();

    const handleClick = () => {
        setActive(order);
    };

    return (
        <div
            onClick={handleClick}
            className={clsx([
                'tw-bg-slate-100 tw-border-2 tw-border-solid tw-border-slate-50 tw-cursor-pointer tw-rounded-xl tw-p-5',
                { 'tw-bg-blue-50 tw-border-blue-600': active },
            ])}
        >
            <div>Câu {order + 1}</div>
            <div className={'tw-mt-4'}>
                <Controller
                    rules={{
                        required: 'Không được để trống',
                    }}
                    name={`answers.${order}.answer`}
                    control={control}
                    render={({ field, fieldState: { error, invalid } }) => (
                        <TextField
                            error={invalid}
                            helperText={error?.message}
                            fullWidth
                            size={'small'}
                            label={'Đáp án'}
                            value={field.value}
                            onChange={(event) => {
                                emitChange(order, `answer`, event.target.value);
                                field.onChange(event);
                            }}
                        />
                    )}
                />
            </div>
            <div className={'tw-mt-4'}>
                <Controller
                    rules={{
                        required: 'Không được để trống điểm',
                        min: {
                            value: 0,
                            message: 'Điểm không hợp lệ',
                        },
                    }}
                    name={`answers.${order}.mark`}
                    control={control}
                    render={({ field, fieldState: { error, invalid } }) => (
                        <TextField
                            error={invalid}
                            helperText={error?.message}
                            type={'number'}
                            fullWidth
                            size={'small'}
                            onChange={(event) => {
                                emitChange(order, `mark`, event.target.value);
                                field.onChange(event);
                            }}
                            value={field.value}
                            label={'Điểm'}
                        />
                    )}
                />
            </div>
        </div>
    );
}

export default memo(FormMultipleChoiceItem);

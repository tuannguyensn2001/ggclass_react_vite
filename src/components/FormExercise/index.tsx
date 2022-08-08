import { useFormContext, Controller } from 'react-hook-form';
import { FormMultipleChoiceInterface } from '~/types/exercise';
import { FormGroup, Switch, TextField } from '@mui/material';
import { TimePicker, DateTimePicker } from '@mui/x-date-pickers';
import FormControlLabel from '@mui/material/FormControlLabel';
import SelectMaterial from '~/components/SelectMaterial';
import { RoleStudent } from '~/enums/role_student';
import { ExerciseMode } from '~/enums/exercise';

function FormExercise() {
    const { control } = useFormContext<FormMultipleChoiceInterface>();

    return (
        <div className={'tw-mt-10'}>
            <div className={'tw-px-5'}>
                <Controller
                    rules={{
                        required: 'Ten khong duoc de trong',
                    }}
                    control={control}
                    name={'name'}
                    render={({ field, fieldState: { error, invalid } }) => (
                        <TextField
                            error={invalid}
                            helperText={error?.message}
                            fullWidth
                            label={'Ten'}
                            {...field}
                            variant={'outlined'}
                        />
                    )}
                />
                <div className={'tw-mt-4'}>
                    <Controller
                        control={control}
                        name={'password'}
                        render={({ field }) => (
                            <TextField fullWidth label={'Mat khau'} type={'password'} {...field} variant={'outlined'} />
                        )}
                    />
                </div>
                <div className={'tw-mt-4'}>
                    <Controller
                        rules={{
                            min: {
                                value: 0,
                                message: 'Thoi luong lam bai khong hop le',
                            },
                        }}
                        control={control}
                        name={'timeToDo'}
                        render={({ field, fieldState: { error, invalid } }) => (
                            <TextField
                                error={invalid}
                                helperText={error?.message}
                                fullWidth
                                type={'number'}
                                label={'Thoi luong lam bai'}
                                {...field}
                                variant={'outlined'}
                            />
                        )}
                    />
                </div>
                <div className={'tw-mt-5'}>
                    <Controller
                        control={control}
                        name={'timeStart'}
                        render={({ field }) => (
                            <DateTimePicker
                                label={'Thoi gian bat dau'}
                                {...field}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        )}
                    />
                </div>
                <div className={'tw-mt-5'}>
                    <Controller
                        control={control}
                        name={'timeEnd'}
                        render={({ field }) => (
                            <DateTimePicker
                                label={'Thoi gian ket thuc'}
                                {...field}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        )}
                    />
                </div>
                <div className="tw-mt-5">
                    <Controller
                        control={control}
                        name={'isTest'}
                        render={({ field }) => (
                            <FormGroup>
                                <FormControlLabel control={<Switch />} label="Day la bai kiem tra" />
                            </FormGroup>
                        )}
                    />
                </div>
                <div className="tw-mt-5">
                    <Controller
                        control={control}
                        name={'preventViewQuestion'}
                        render={({ field }) => (
                            <FormGroup>
                                <FormControlLabel
                                    control={<Switch checked={Boolean(field.value)} onChange={field.onChange} />}
                                    label="Chan hoc sinh xem lai de sau khi lam bai xong"
                                />
                            </FormGroup>
                        )}
                    />
                </div>
                <div className="tw-mt-5">
                    <Controller
                        control={control}
                        name={'roleStudent'}
                        render={({ field }) => (
                            <SelectMaterial
                                label={'Quyen cua hoc sinh'}
                                value={field.value}
                                options={[
                                    {
                                        value: RoleStudent.VIEW_MARK_AND_ANSWER.toString(),
                                        text: 'Xem diem va dap an',
                                    },
                                    {
                                        value: RoleStudent.ONLY_VIEW_MARK.toString(),
                                        text: 'Chi xem diem',
                                    },
                                    {
                                        value: RoleStudent.PREVENT_VIEW_MARK.toString(),
                                        text: 'Khong duoc xem diem',
                                    },
                                ]}
                                onChange={field.onChange}
                            />
                        )}
                    />
                </div>
                <div className="tw-mt-5">
                    <Controller
                        rules={{
                            min: {
                                value: 1,
                                message: 'So lan lam bai khong hop le',
                            },
                        }}
                        control={control}
                        name={'numberOfTimeToDo'}
                        render={({ field, fieldState: { error, invalid } }) => (
                            <TextField
                                error={invalid}
                                helperText={error?.message}
                                fullWidth
                                type={'number'}
                                {...field}
                                label={'So lan lam bai'}
                            />
                        )}
                    />
                </div>
                <div className="tw-mt-5">
                    <Controller
                        control={control}
                        name={'mode'}
                        render={({ field }) => (
                            <SelectMaterial
                                label={'Thiet lap bang diem'}
                                value={field.value}
                                options={[
                                    {
                                        value: ExerciseMode.GET_MARK_FOR_FIRST_TIME_TO_DO.toString(),
                                        text: 'Lay diem lan dau tien',
                                    },
                                    {
                                        value: ExerciseMode.GET_MARK_FOR_NEWEST.toString(),
                                        text: 'Lay diem thoi gian gan nhat',
                                    },
                                    {
                                        value: ExerciseMode.GET_HIGHEST_MARK.toString(),
                                        text: 'Lay diem cao nhat',
                                    },
                                ]}
                                onChange={field.onChange}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

export default FormExercise;

import { useFormContext, Controller } from 'react-hook-form';
import { FormMultipleChoiceInterface } from '~/types/exercise';
import { FormGroup, Switch, TextField } from '@mui/material';
import styles from './styles.module.css';
import { TimePicker, DateTimePicker } from '@mui/x-date-pickers';
import FormControlLabel from '@mui/material/FormControlLabel';
import SelectMaterial from '~/components/SelectMaterial';
import { RoleStudent } from '~/enums/role_student';
import { ExerciseMode } from '~/enums/exercise';
function FormExercise() {
    const { control } = useFormContext<FormMultipleChoiceInterface>();

    return (
        <div className={styles.wrapper}>
            <div className={'tw-mt-10'}>
                <div className={'tw-px-5'}>
                    <Controller
                        rules={{
                            required: 'Tên không được để trống',
                        }}
                        control={control}
                        name={'name'}
                        render={({ field, fieldState: { error, invalid } }) => (
                            <TextField
                                error={invalid}
                                helperText={error?.message}
                                fullWidth
                                label={'Tên'}
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
                                <TextField
                                    fullWidth
                                    label={'Mật khẩu'}
                                    type={'password'}
                                    {...field}
                                    variant={'outlined'}
                                />
                            )}
                        />
                    </div>
                    <div className={'tw-mt-4'}>
                        <Controller
                            rules={{
                                min: {
                                    value: 0,
                                    message: 'Thời lượng làm bài không hợp lệ',
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
                                    label={'Thời lượng làm bài'}
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
                                    label={'Thời gian bắt đầu'}
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
                                    label={'Thời gian kết thúc'}
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
                                    <FormControlLabel control={<Switch />} label="Đây là là bài kiểm tra" />
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
                                        label="Chặn học sinh xem lại sau khi làm bài xong"
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
                                    label={'Quền của học sinh'}
                                    value={field.value}
                                    options={[
                                        {
                                            value: RoleStudent.VIEW_MARK_AND_ANSWER.toString(),
                                            text: 'Xem điểm và đáp án',
                                        },
                                        {
                                            value: RoleStudent.ONLY_VIEW_MARK.toString(),
                                            text: 'Chỉ xem điểm',
                                        },
                                        {
                                            value: RoleStudent.PREVENT_VIEW_MARK.toString(),
                                            text: 'Không được xem điểm',
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
                                    message: 'Số lần làm bài không hợp lệ',
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
                                    label={'Số lần làm bài '}
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
                                    label={'Thiết lập bảng điểm'}
                                    value={field.value}
                                    options={[
                                        {
                                            value: ExerciseMode.GET_MARK_FOR_FIRST_TIME_TO_DO.toString(),
                                            text: 'Lấy điểm lần đầu tiên',
                                        },
                                        {
                                            value: ExerciseMode.GET_MARK_FOR_NEWEST.toString(),
                                            text: 'Lấy điểm thời gian gần nhất',
                                        },
                                        {
                                            value: ExerciseMode.GET_HIGHEST_MARK.toString(),
                                            text: 'Lấy điểm cao nhất',
                                        },
                                    ]}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormExercise;

import TextField from '@mui/material/TextField';
// @ts-ignore
import styles from './styles.module.css';
import { useFormContext } from 'react-hook-form';
import { FormLessonType } from '~/types/lesson';
import { Controller } from 'react-hook-form';

function BoxInputLessonAdd() {
    const { control } = useFormContext<FormLessonType>();

    return (
        <div className={styles.wrap}>
            <h6 className={styles.header}>Tạo bài giảng từ Youtube hoặc Facebook Video</h6>
            <p className={styles.title}>
                Có thể tải nhiều bài giảng video bằng cách nhập link playlist từ Youtube
            </p>
            <Controller
                rules={{
                    pattern: {
                        value: /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,
                        message: 'Link không hợp lệ',
                    },
                }}
                control={control}
                name={'youtubeLink'}
                render={({ field, fieldState: { error, invalid } }) => (
                    <TextField
                        error={invalid}
                        helperText={error?.message}
                        {...field}
                        className={styles.input}
                        placeholder="Nhập link youtube/facebook video tại đây..."
                        id="outlined-basic"
                        variant="outlined"
                    />
                )}
            />
        </div>
    );
}

export default BoxInputLessonAdd;

import { Button, TextareaAutosize, TextField } from '@mui/material';
// @ts-ignore
import styles from './styles.module.css';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import { useFormContext } from 'react-hook-form';
import { FormLessonType } from '~/types/lesson';
import { Controller } from 'react-hook-form';
import { getCreateLesson, getUpdateLesson } from '~/repositories/lesson';
import { useMutation } from 'react-query';
import useFolderStore from '~/store/useFolderStore';
import { useNavigate, useParams } from 'react-router-dom';

function SiderbarLessonAddEdit() {
    const { control, handleSubmit } = useFormContext<FormLessonType>();

    const { id } = useParams();

    const { mutate } = useMutation('create', (data: FormLessonType) => getCreateLesson(data), {
        onSuccess() {
            navigate(`/class/${id}/lesson`);
        },
    });

    const { mutate: mutateEdit } = useMutation(
        'update',
        (data: FormLessonType) => getUpdateLesson(Number(data.id), data),
        {
            onSuccess() {
                navigate(`/class/${id}/lesson`);
            },
        },
    );

    const folderId = useFolderStore((state) => state.id);

    const navigate = useNavigate();

    const submit = (data: FormLessonType) => {
        if (Boolean(data?.id)) {
            mutateEdit({
                ...data,
                folderId: Number(folderId),
            });
        } else {
            mutate({
                ...data,
                folderId: Number(folderId),
            });
        }
    };

    return (
        <div className={styles.wrap}>
            <div className={styles.item}>
                <div className={styles.name}>Tên bài giảng</div>
                <div className={styles.input}>
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
                                {...field}
                                style={{
                                    width: '100%',
                                }}
                                InputProps={{
                                    style: {
                                        height: 38,
                                        border: 'none',
                                    },
                                }}
                            />
                        )}
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.name}>Mô tả</div>
                <div className={styles.input}>
                    <Controller
                        control={control}
                        name={'description'}
                        render={({ field }) => (
                            <TextareaAutosize
                                {...field}
                                className={styles.aria}
                                aria-label="empty textarea"
                                minRows={6}
                                style={{ width: '100%' }}
                            />
                        )}
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.name}>Bài tập đính kèm</div>
                <div className={styles.button}>
                    <div className={styles.icon}>
                        <FindInPageIcon />
                    </div>
                    <div className={styles.title}>Chọn bài tập</div>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.name}>Bài giảng đính kèm</div>
                <div className={styles.button}>
                    <div className={styles.icon}>
                        <FindInPageIcon />
                    </div>
                    <div className={styles.title}>Chọn tài liệu</div>
                </div>
            </div>
            <div className={'tw-w-full'}>
                <Button onClick={handleSubmit(submit)} fullWidth variant={'contained'}>
                    Hoàn tất
                </Button>
            </div>
        </div>
    );
}

export default SiderbarLessonAddEdit;

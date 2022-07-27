// @ts-ignore
import styles from './styles.module.css';
// @ts-ignore
import avatarDefault from '~/assets/images/avatar_default.png';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Box, Button } from '@mui/material';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { memo } from 'react';
import { IPost } from '~/models/IPost';

type Prop = {
    avatar?: string;
    handleCreatePost: (comment: Pick<IPost, 'content'>) => void;
};

function CreatePost({ handleCreatePost, avatar }: Prop) {
    const { register, handleSubmit, reset } = useForm<Pick<IPost, 'content'>>();

    const submit = (data: Pick<IPost, 'content'>) => {
        const content = data.content.trim();

        if (content !== '') {
            handleCreatePost({
                content,
            });
            reset({
                content: '',
            });
        } else {
            toast.error('Vui lòng nhập nội dung trước khi comment');
        }
    };

    return (
        <div className={styles.wrap}>
            <Box className={styles.container} component="form" onSubmit={handleSubmit(submit)}>
                <div className={styles.header}>
                    <img src={avatar || avatarDefault} alt="" className={'tw-h-12 tw-w-12 tw-rounded-full'} />
                    <div className={styles.input}>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={3}
                            placeholder="Nhập nội dung thảo luận với lớp học..."
                            className={styles.text}
                            {...register('content')}
                        />
                    </div>
                </div>
                <div className={styles.footer}>
                    <Button sx={{ fontSize: 14 }} className={clsx(styles.button, styles.addImg)}>
                        Thêm hình
                    </Button>
                    <Button type="submit" sx={{ fontSize: 14 }} className={clsx(styles.button, styles.post)}>
                        Đăng tin
                    </Button>
                </div>
            </Box>
        </div>
    );
}

export default memo(CreatePost);

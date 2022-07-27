import { Box, TextField } from '@mui/material';
// @ts-ignore
import styles from './style.module.scss';
import { toast } from 'react-toastify';

import { useForm } from 'react-hook-form';
import { IComment } from '~/models/IComment';

const defaultAvatar =
    'https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-1/101830537_1239845979691749_228845925963615578_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=1UXkm3mh76MAX-OJ8-o&tn=VK2XOghYpsrfDvQB&_nc_ht=scontent.fdad3-4.fna&oh=00_AT8VYNY3j2me3h_MGaBwG1bAnWmmNn48g4JFn5lrueiMRQ&oe=62F2C6AE';

interface Prop {
    postId: number;
    handleCreateComment: (comment: Pick<IComment, 'content' | 'postId'>) => void;
    avatar?: string;
}

function CommentWrite({ postId, handleCreateComment, avatar }: Prop) {
    const { register, handleSubmit, reset } = useForm<Pick<IComment, 'content'>>();
    const onSubmit = (data: Pick<IComment, 'content'>) => {
        const content = data.content.trim();

        if (content !== '') {
            handleCreateComment({
                content,
                postId: postId,
            });
            reset({
                content: '',
            });
        } else {
            toast.error('Vui lòng nhập nội dung trước khi comment');
        }
    };
    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} className={styles.cover_input}>
            <div className={styles.avatar}>
                <img className={styles.img} src={avatar || defaultAvatar} alt="" />
            </div>
            <div className={styles.input}>
                <TextField
                    {...register('content')}
                    size="small"
                    fullWidth
                    className={styles.input_text}
                    placeholder="Viết bình luận ..."
                    type="text"
                />
            </div>
        </Box>
    );
}

export default CommentWrite;

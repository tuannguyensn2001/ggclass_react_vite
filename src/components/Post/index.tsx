// @ts-ignore
import avatarDefault from '~/assets/images/avatar_default.png';
import dayjs from 'dayjs';
import CustomMenu from '~/components/CustomMenu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { createElement, memo } from 'react';
import { useConfirm } from 'material-ui-confirm';
import Comment from '~/components/Comment';
import CommentWrite from '~/components/CommentWrite';
// @ts-ignore
import styles from './styles.module.css';
import { IComment } from '~/models/IComment';

interface Prop {
    postId: number;
    content: string;
    byUserName?: string;
    comments: IComment[];
    handleCreateComment: (comment: Pick<IComment, 'content' | 'postId'>) => void;
    avatar?: string;
    authAvatar?: string;
}

function Post({ postId, content, byUserName, comments, handleCreateComment, avatar, authAvatar }: Prop) {
    const confirm = useConfirm();

    return (
        <div className={'tw-border tw-p-5 tw-rounded-xl tw-border-solid tw-border-slate-300 tw-bg-white '}>
            <div className={'tw-flex tw-justify-between '}>
                <div className={'tw-flex'}>
                    <img src={avatar || avatarDefault} alt="" className={'tw-h-12 tw-w-12 tw-rounded-full'} />
                    <div className={'tw-flex tw-flex-col tw-justify-center tw-ml-2'}>
                        <div className={'tw-font-bold'}>{byUserName}</div>
                        <div className={'tw-text-xs tw-font-normal'}>
                            Vao luc {dayjs().format('D/M/YYYY, HH:MM:ss').toString()}
                        </div>
                    </div>
                </div>
                <div>
                    <CustomMenu
                        list={[
                            {
                                text: 'Xóa bài viết',
                                icon: DeleteIcon,
                                props: {
                                    onClick() {
                                        confirm({
                                            description: ' Xoa bai viet nay khong ban',
                                        })
                                            .then(() => {})
                                            .catch((err) => {});
                                    },
                                },
                            },
                        ]}
                        renderTextMenu={({ text, icon }: any) => (
                            <div className={'tw-px-5 tw-flex'}>
                                <div className={'tw-flex tw-flex-col tw-justify-center'}>
                                    {createElement(icon, { fontSize: 'small' })}
                                </div>
                                <div className={'tw-flex tw-flex-col tw-justify-center tw-ml-1 tw-mt-0.5 tw-text-sm'}>
                                    {text}
                                </div>
                            </div>
                        )}
                    >
                        <div className={'tw-cursor-pointer'}>
                            <MoreVertIcon />
                        </div>
                    </CustomMenu>
                </div>
            </div>

            <div className={styles.content}>{content}</div>

            <div>
                <CommentWrite avatar={authAvatar} postId={postId} handleCreateComment={handleCreateComment} />
            </div>

            <div>
                {comments &&
                    comments.length > 0 &&
                    comments.map((item: IComment) => (
                        <Comment
                            avatar={item?.createdByUser?.profile?.avatar}
                            key={item?.id}
                            name={item?.createdByUser?.username}
                            content={item?.content}
                        />
                    ))}
            </div>
        </div>
    );
}

export default memo(Post);

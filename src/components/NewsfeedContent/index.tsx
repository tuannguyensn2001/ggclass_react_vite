import Post from '~/components/Post';
// @ts-ignore
import styles from './styles.module.css';
import CreatePost from '~/components/CreatePost';
import useAuthStore from '~/store/useAuthStore';
import { IPost } from '~/models/IPost';
import { IComment } from '~/models/IComment';

interface Prop {
    handleCreatePost: (post: Pick<IPost, 'content'>) => void;
    handleCreateComment: (comment: Pick<IComment, 'content' | 'postId'>) => void;
    data: IPost[];
}

function NewsfeedContent({ data, handleCreatePost, handleCreateComment }: Prop) {
    const getAvatar = useAuthStore((state) => state.getAvatar);

    return (
        <div className={styles.wrap}>
            <div className={styles.createPost}>
                <CreatePost avatar={getAvatar()} handleCreatePost={handleCreatePost} />
            </div>
            <div className={styles.listPost}>
                {data &&
                    data.length > 0 &&
                    data.map((item: IPost) => (
                        <div key={item?.id} className={styles.postItem}>
                            <Post
                                authAvatar={getAvatar()}
                                avatar={item?.createdByUser?.profile?.avatar}
                                postId={item?.id}
                                content={item?.content}
                                byUserName={item?.createdByUser?.username}
                                comments={item?.comments}
                                handleCreateComment={handleCreateComment}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default NewsfeedContent;

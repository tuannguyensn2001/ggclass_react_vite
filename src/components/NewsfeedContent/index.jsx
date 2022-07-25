import Post from '~/components/Post';
import styles from './styles.module.css';
import CreatePost from '~/components/CreatePost';
import useAuthStore from '~/store/useAuthStore';

function NewsfeedContent({ data, handleCreatePost, handleCreateComment }) {
    const getAvatar = useAuthStore((state) => state.getAvatar);

    return (
        <div className={styles.wrap}>
            <div className={styles.createPost}>
                <CreatePost avatar={getAvatar()} handleCreatePost={handleCreatePost} />
            </div>
            <div className={styles.listPost}>
                {data &&
                    data.length > 0 &&
                    data.map((item, index) => (
                        <div key={item?.id} className={styles.postItem}>
                            <Post
                                authAvatar={getAvatar()}
                                avatar={item?.createdByUser?.profile?.avatar}
                                postId={item?.id}
                                content={item?.content}
                                byUserName={item?.createdByUser?.username}
                                comments={item?.comments}
                                time={item?.updatedAt}
                                handleCreateComment={handleCreateComment}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default NewsfeedContent;


import Post from '~/components/Post';
import styles from './styles.module.css'
import CreatePost from '~/components/CreatePost'
function NewsfeedContent({data,handleCreatePost,handleCreateComment}) {
    return (
        <div className={styles.wrap}>
            <div className={styles.createPost}>
                <CreatePost handleCreatePost={handleCreatePost}/>
            </div>
            <div className={styles.listPost}>
        {data && data.length >0 && data.map((item, index)=>(
            <div key={index} className={styles.postItem}>
                <Post
                postId={item?.id}
                content={item?.content}
                byUserName={item?.createdByUser?.username}
                comments={item?.comments}
                handleCreateComment={handleCreateComment}
                />
            </div>
        ))
    }

            </div>
        </div>
    );
    }
export default NewsfeedContent
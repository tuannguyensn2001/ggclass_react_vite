
import Post from '~/components/Post';
import styles from './styles.module.css'
import CreatePost from '~/components/CreatePost'
function NewsfeedContent() {
    return (
        <div className={styles.wrap}>
            <div className={styles.createPost}>
                <CreatePost/>
            </div>
            <div className={styles.postItem}>
                <Post/>
            </div>
        </div>
    );
    }
export default NewsfeedContent
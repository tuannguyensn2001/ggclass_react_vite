import Post from '~/components/Post';
import PostEditor from '~/components/PostEditor';
import styles from './style.module.scss';

function Newsfeed() {
    return (
        <div>
            <div className={styles.wrapper}>
                <div className="tw-w-1/2">
                    <div>
                        <PostEditor />
                    </div>
                    <Post />
                </div>
            </div>
        </div>
    );
}

export default Newsfeed;

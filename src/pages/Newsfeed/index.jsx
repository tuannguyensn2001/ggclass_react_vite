import Post from '~/components/Post';
import PostEditor from '~/components/PostEditor';
import styles from './style.module.css';
import NewsfeedHeader from '~/components/NewsfeedHeader'
import NewsfeedSiderBarRight from '~/components/NewsfeedSiderBarRight';
import NewsfeedContent from '~/components/NewsfeedContent';
function Newsfeed() {
    return (
        <div className={styles.wrap}>
            <div className={styles.content}>
                <NewsfeedHeader/>
                <NewsfeedContent/>
            </div>
            <NewsfeedSiderBarRight/>
        </div>
    );
}

export default Newsfeed;

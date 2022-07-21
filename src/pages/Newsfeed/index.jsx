import styles from './style.module.css';
import NewsfeedHeader from '~/components/NewsfeedHeader';
import NewsfeedSiderBarRight from '~/components/NewsfeedSiderBarRight';
import NewsfeedContent from '~/components/NewsfeedContent';

import useManageMyNewFeeds from '~/hooks/useManageMyNewFeeds';

function Newsfeed() {
    const { listPost, setListPost, mutateP, mutateC, classId } = useManageMyNewFeeds();

    const handleCreatePost = (data) => {
        mutateP({
            ...data,
            classId: classId,
        });
    };
    const handleCreateComment = (data) => {
        mutateC(data);
    };
    return (
        <div className={styles.wrap}>
            <div className={styles.content}>
                <NewsfeedHeader />
                <NewsfeedContent
                    handleCreateComment={handleCreateComment}
                    handleCreatePost={handleCreatePost}
                    data={listPost}
                />
            </div>
            <NewsfeedSiderBarRight />
        </div>
    );
}

export default Newsfeed;

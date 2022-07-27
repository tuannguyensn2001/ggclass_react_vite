// @ts-ignore
import styles from './style.module.css';
import NewsfeedHeader from '~/components/NewsfeedHeader';
import NewsfeedSiderBarRight from '~/components/NewsfeedSiderBarRight';
import NewsfeedContent from '~/components/NewsfeedContent';

import useManageMyNewFeeds from '~/hooks/useManageMyNewFeeds';
import { useCallback } from 'react';
import { IPost } from '~/models/IPost';
import { IComment } from '~/models/IComment';

function Newsfeed() {
    const { listPost, setListPost, mutateP, mutateC, classId } = useManageMyNewFeeds();

    const handleCreatePost = useCallback((data: Pick<IPost, 'content'>) => {
        mutateP({
            ...data,
            classId: classId,
        });
    }, []);
    const handleCreateComment = useCallback((data: Pick<IComment, 'content' | 'postId'>) => {
        mutateC(data);
    }, []);

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

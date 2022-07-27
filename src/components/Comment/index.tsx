// @ts-ignore
import styles from './style.module.scss';
import { memo } from 'react';
import { IComment } from '~/models/IComment';

const defaultAvatar =
    'https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-1/101830537_1239845979691749_228845925963615578_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=1UXkm3mh76MAX-OJ8-o&tn=VK2XOghYpsrfDvQB&_nc_ht=scontent.fdad3-4.fna&oh=00_AT8VYNY3j2me3h_MGaBwG1bAnWmmNn48g4JFn5lrueiMRQ&oe=62F2C6AE';

type Prop = Pick<IComment, 'content'> & {
    name?: string;
    avatar?: string;
};

function Comment({ name, content, avatar }: Prop) {
    return (
        <div className={styles.cover}>
            <div className={styles.avatar}>
                <img className={styles.img} src={avatar || defaultAvatar} alt="" />
            </div>

            <div className={styles.cover_comment}>
                <div className={styles.comment}>
                    <div className={styles.time}>
                        <div className={styles.name}>
                            {name}
                            <span className={styles.day}> - 12 phút trước</span>
                        </div>
                    </div>
                    <div className={styles.text}>{content}</div>
                </div>
                <div>
                    <img
                        className={`${styles.img} ${styles.btn}`}
                        src="https://www.shareicon.net/data/512x512/2016/06/07/777348_interface_512x512.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default memo(Comment);

import LessonHeader from '~/components/LessonHeader';
import SiderbarLessonAddEdit from '~/components/SiderbarLessonAddEdit';
import BoxInputLessonAdd from '~/components/BoxInputLessonAdd';
import defaulAvatar from '~/assets/images/avatar_default.png';
import defaulAvatar2 from '~/assets/images/avatar_default2.png';
import styles from './styles.module.css';
import clsx from 'clsx';

function NotificationItem() {
    return (
        <div
            className={clsx(styles.wrap, {
                [styles.watched]: true,
            })}
        >
            <div className={styles.left}>
                <div className={styles.avatar}>
                    <img className={styles.avatar1} src={defaulAvatar} alt="Avatar" />
                    <img className={styles.avatar2} src={defaulAvatar2} alt="A2atar" />
                </div>
            </div>
            <div className={styles.content}>
                <h5 className={styles.header}>
                    Mạnh Cường đã tham gai lớp Võ Mạnh Cường đã tham gai lớp của Võ Mạnh Cường Võ Mạnh Cường đã tham gai
                    lớp của Võ Mạnh Cường
                </h5>
                <p className={styles.time}>Vào 15:30, 19/2/2018 </p>
            </div>
        </div>
    );
}

export default NotificationItem;

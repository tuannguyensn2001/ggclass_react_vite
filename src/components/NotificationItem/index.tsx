// @ts-ignore
import defaulAvatar from '~/assets/images/avatar_default.png';
// @ts-ignore
import defaulAvatar2 from '~/assets/images/avatar_default2.png';
// @ts-ignore
import styles from './styles.module.css';
import clsx from 'clsx';
import dayjs from '~/packages/dayjs';
import { useNavigate, useParams } from 'react-router-dom';
import { NotificationType } from '~/enums/notification';
import { getSeen } from '~/repositories/notification';
import { useMutation } from 'react-query';

interface Prop {
    htmlContent: string;
    createdAt: string;
    ownerAvatar: string;
    type: number;
    seen: number;
    id: string;
    handleClick: (id: string) => void;
}

function NotificationItem({ htmlContent, createdAt, ownerAvatar, type, seen, id, handleClick }: Prop) {
    const navigate = useNavigate();

    const onClick = () => {
        // mutate();
        handleClick(id);
    };

    return (
        <div
            onClick={onClick}
            className={clsx(styles.wrap, {
                [styles.watched]: true,
                ['tw-bg-gray-200']: seen === 0,
            })}
        >
            <div className={styles.left}>
                <div className={styles.avatar}>
                    <img className={styles.avatar1} src={ownerAvatar} alt="Avatar" />
                    {/*<img className={styles.avatar2} src={defaulAvatar2} alt="A2atar" />*/}
                </div>
            </div>
            <div className={styles.content}>
                <h5 className={styles.header} dangerouslySetInnerHTML={{ __html: htmlContent }}></h5>
                <p className={styles.time}>Vào {dayjs(createdAt).format('HH:mm DD/MM/YYYY')} </p>
            </div>
        </div>
    );
}

export default NotificationItem;

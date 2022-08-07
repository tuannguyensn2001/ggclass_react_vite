// @ts-ignore
import styles from './styles.module.css';
import clsx from 'clsx';
import CloseIcon from '@mui/icons-material/Close';
import dayjs from '~/packages/dayjs';
import { memo } from 'react';

function NewFeedNotification({ content, createdAt }: { content: string; createdAt: string }) {
    return (
        <div className={styles.wrap}>
            <div className={styles.left}>
                <h6 className={styles.header}>{content}</h6>
                <p className={styles.time}>{dayjs(createdAt).format(' HH:MM DD/MM/YYYY')}</p>
            </div>
            <div className={styles.close}>
                <CloseIcon sx={{ fontSize: 20 }} />
            </div>
        </div>
    );
}

export default memo(NewFeedNotification);

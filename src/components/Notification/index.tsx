import React from 'react';

import NotificationItem from '~/components/NotificationItem';
// @ts-ignore
import styles from './styles.module.css';

function Notification() {
    return (
        <div className={styles.wrap}>
            <div className={styles.header}>Thông báo</div>
            <div className={styles.content}>
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
            </div>
        </div>
    );
}

export default Notification;

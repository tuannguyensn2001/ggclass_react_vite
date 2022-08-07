import React, { useEffect } from 'react';

import NotificationItem from '~/components/NotificationItem';
// @ts-ignore
import styles from './styles.module.css';
import useGetMyNotifications from '~/hooks/useGetMyNotifications';
import { INotification } from '~/models/INotification';
import { NotificationType } from '~/enums/notification';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation } from 'react-query';
import { getSeen } from '~/repositories/notification';
import pusher from '~/packages/pusher';
import useNotificationStore from '~/store/useNotificationStore';

function Notification() {
    const { notifications, setSeen } = useGetMyNotifications();

    const refetch = useNotificationStore((state) => state.refetch);

    const navigate = useNavigate();

    const { mutate } = useMutation('seen', (id: string) => getSeen(id));

    const { id: classId } = useParams();

    const handleClickNotification = (id: string) => {
        const notification = notifications.find((item) => item.id === id);
        if (!notification) return;
        const { type } = notification;

        if (type === NotificationType.FROM_TEACHER_TO_USER) {
            navigate(`/class/${classId}/newsfeed`);
        }

        setSeen(id);
        mutate(id);

        window.dispatchEvent(new CustomEvent('close-notification'));
    };

    useEffect(() => {
        const channel = pusher.subscribe('notifications');

        channel.bind('refetch', (data: number[]) => {
            refetch();
        });
    }, [refetch]);

    return (
        <div className={styles.wrap}>
            <div className={styles.header}>Thông báo</div>
            <div className={styles.content}>
                {notifications?.map((item) => (
                    <NotificationItem
                        handleClick={handleClickNotification}
                        id={item.id}
                        type={item.type}
                        createdAt={item.createdAt}
                        ownerAvatar={item.ownerAvatar}
                        htmlContent={item.htmlContent}
                        key={item.id}
                        seen={item.seen}
                    />
                ))}
            </div>
        </div>
    );
}

export default Notification;

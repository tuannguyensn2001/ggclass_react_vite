import { useQuery } from 'react-query';
import { getMyNotifications } from '~/repositories/notification';
import { INotification } from '~/models/INotification';
import { useCallback, useMemo, useState } from 'react';
import useNotificationStore from '~/store/useNotificationStore';

export default function useGetMyNotifications() {
    const query = useQuery<any, any, INotification[]>('notifications', () => getMyNotifications(), {
        onSuccess(data) {
            setNotifications(data);
        },
    });

    const { notifications, setNotifications, setSeen } = useNotificationStore((state) => state);

    const newestNumber = useMemo<number>(() => {
        if (!notifications) return 0;
        return notifications.filter((item) => item.seen === 0).length;
    }, [notifications]);

    // const setSeen = useCallback((id: string) => {
    //     setNotifications((prevState) => {
    //         const clone = structuredClone(prevState);
    //
    //         const notification = clone.find((item) => item.id === id);
    //         console.log(notification);
    //
    //         if (!notification) return prevState;
    //         notification.seen = 1;
    //
    //         return clone;
    //     });
    // }, []);

    return {
        // ...query,
        newestNumber,
        notifications,
        setSeen,
    };
}

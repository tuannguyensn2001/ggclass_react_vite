import {
    fetchCreateNotificationFromTeacherToUser,
    fetchGetNotificationsFromTeacherToUser,
    fetchMyNotifications,
    fetchSeen,
} from '~/services/notification';
import { INotification } from '~/models/INotification';

export const getCreateNotificationFromTeacherToClass = async (classId: number, content: string) => {
    const response = await fetchCreateNotificationFromTeacherToUser(classId, content);
    return response.data;
};

export const getNotificationsFromTeacherToClass = async (classId: number): Promise<INotification[]> => {
    const response = await fetchGetNotificationsFromTeacherToUser(classId);
    return response.data.data;
};

export const getMyNotifications = async (): Promise<INotification[]> => {
    const response = await fetchMyNotifications();
    return response.data.data;
};

export const getSeen = async (notificationId: string): Promise<string> => {
    const response = await fetchSeen(notificationId);
    return response.data.message;
};

import API from '~/network/API';

export const fetchCreateNotificationFromTeacherToUser = (classId: number, content: string) => {
    return API.post('/v1/notifications/from-teacher-to-class', {
        classId,
        content,
    });
};

export const fetchGetNotificationsFromTeacherToUser = (classId: number) => {
    return API.get(`/v1/notifications/class/${classId}/from-teacher-to-class`);
};

export const fetchMyNotifications = () => {
    return API.get('/v1/notifications');
};

export const fetchSeen = (notificationId: string) => {
    return API.put('/v1/notifications/seen', {
        notificationId: notificationId,
    });
};

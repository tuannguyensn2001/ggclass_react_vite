import { NotificationType } from '~/enums/notification';

export interface INotification {
    id: string;
    ownerName: string;
    ownerAvatar: string;
    htmlContent: string;
    content: string;
    createdBy: number;
    classId: number;
    createdAt: string;
    updatedAt: string;
    seen: number;
    type: NotificationType;
}

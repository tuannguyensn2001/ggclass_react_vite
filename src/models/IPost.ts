import { IUser } from '~/models/IUser';
import { IComment } from '~/models/IComment';

export declare interface IPost {
    id: number;
    content: string;
    createdBy: number;
    classId: number;
    createdAt: string;
    updatedAt: string;
    createdByUser?: IUser;
    comments: IComment[];
}

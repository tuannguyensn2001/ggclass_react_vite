import { IUser } from '~/models/IUser';

export declare interface IComment {
    id: number;
    content: string;
    postId: number;
    createdBy: number;
    createdAt: string;
    updatedAt: string;
    createdByUser?: IUser;
}

import { IUser } from '~/models/IUser';

export interface IClass {
    id: number;
    name: string;
    description: string;
    room: string;
    topic: string;
    code: string;
    createdBy: number;
    createdByUser?: IUser;
    createdAt: string;
    updatedAt: string;
    statusClass?: number;
}

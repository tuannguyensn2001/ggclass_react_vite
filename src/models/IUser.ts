import { IProfile } from '~/models/IProfile';

export declare interface IUser {
    id: number;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    profile?: IProfile;
}

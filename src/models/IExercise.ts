import { RoleStudent } from '~/enums/role_student';

export declare interface IExercise {
    name: string;
    password: string;
    timeToDo: number;
    timeToEnd: string;
    timeStart: string;
    isTest: boolean;
    preventViewQuestion: boolean;
    roleStudent: RoleStudent;
    numberOfTimeToDo: number;
}

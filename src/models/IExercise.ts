import { RoleStudent } from '~/enums/role_student';
import { ExerciseMode, ExerciseType } from '~/enums/exercise';

export declare interface IExercise {
    id: number;
    name: string;
    password: string;
    timeToDo: number;
    timeEnd?: string | null;
    timeStart?: string | null;
    isTest: boolean | number;
    preventViewQuestion: boolean | number;
    roleStudent: RoleStudent;
    numberOfTimeToDo: number;
    mode: ExerciseMode;
    classId: number;
    createdBy: number;
    createdAt: string;
    updatedAt: string;
    type: ExerciseType;
    version: number;
    canLate: boolean;
    exerciseCloneId: number;
    totalMembersInClass: number;
    totalMembersDoExercise: number;
}

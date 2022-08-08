export enum ExerciseMode {
    GET_MARK_FOR_FIRST_TIME_TO_DO = 1,
    GET_MARK_FOR_NEWEST = 2,
    GET_HIGHEST_MARK = 3,
}

export enum ExerciseType {
    MULTIPLE_CHOICE = 1,
}

export const getTextExerciseMode = (mode: ExerciseMode | undefined): string => {
    if (mode === ExerciseMode.GET_MARK_FOR_FIRST_TIME_TO_DO) {
        return 'Lay diem lan dau tien thi';
    }
    if (mode === ExerciseMode.GET_HIGHEST_MARK) {
        return 'Lay diem thi cao nhat';
    }
    if (mode === ExerciseMode.GET_MARK_FOR_NEWEST) {
        return 'Lay diem thi gan nhat';
    }
    if (!mode) {
        return '';
    }
    throw new Error('mode not valid');
};

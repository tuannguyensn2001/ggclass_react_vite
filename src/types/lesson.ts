import { ILesson } from '~/models/ILesson';

export type FormLessonType = Pick<
    ILesson,
    'name' | 'description' | 'youtubeLink' | 'folderId' | 'id'
>;

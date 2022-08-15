import LessonHeader from '~/components/LessonHeader';
import SiderbarLessonAddEdit from '~/components/SiderbarLessonAddEdit';
import BoxInputLessonAdd from '~/components/BoxInputLessonAdd';

// @ts-ignore
import styles from './styles.module.css';
import { FormProvider, useForm } from 'react-hook-form';
import { FormLessonType } from '~/types/lesson';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getLessonById } from '~/repositories/lesson';

function LessonEdit() {
    const methods = useForm<FormLessonType>({
        defaultValues: {
            name: '',
            description: '',
            youtubeLink: '',
        },
    });

    const { lessonId } = useParams();

    const { data } = useQuery(['lesson', lessonId], async () => getLessonById(Number(lessonId)), {
        onSuccess(data) {
            methods.reset(data);
        },
    });

    return (
        <div className={styles.wrap}>
            <FormProvider {...methods}>
                <div className={styles.content}>
                    <LessonHeader name={'abc'} />
                    <div className={styles.box}>
                        <BoxInputLessonAdd />
                    </div>
                </div>
                <SiderbarLessonAddEdit />
            </FormProvider>
        </div>
    );
}

export default LessonEdit;

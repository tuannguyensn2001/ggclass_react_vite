import LessonHeader from '~/components/LessonHeader';
import SiderbarLessonAddEdit from '~/components/SiderbarLessonAddEdit';
import BoxInputLessonAdd from '~/components/BoxInputLessonAdd';

// @ts-ignore
import styles from './styles.module.css';
import { useForm, FormProvider } from 'react-hook-form';
import { FormLessonType } from '~/types/lesson';

function LessonAdd() {
    const methods = useForm<FormLessonType>({
        defaultValues: {
            name: '',
            description: '',
            youtubeLink: '',
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

export default LessonAdd;

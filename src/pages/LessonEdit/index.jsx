import LessonHeader from '~/components/LessonHeader';
import SiderbarLessonEdit from '~/components/SiderbarLessonEdit';
import BoxInputLessonAdd from '~/components/BoxInputLessonAdd';

import styles from './styles.module.css';

function LessonEdit() {
    return (
        <div className={styles.wrap}>
            <div className={styles.content}>
                <LessonHeader />
                <div className={styles.box}>
                    <BoxInputLessonAdd />
                </div>
            </div>
            <SiderbarLessonEdit />
        </div>
    );
}

export default LessonEdit;

import LessonHeader from '~/components/LessonHeader';
import SiderbarLessonAddEdit from '~/components/SiderbarLessonAddEdit';
import BoxInputLessonAdd from '~/components/BoxInputLessonAdd';

import styles from './styles.module.css';

function LessonAdd() {
    return (
        <div className={styles.wrap}>
            <div className={styles.content}>
                <LessonHeader />
                <div className={styles.box}>
                    <BoxInputLessonAdd />
                </div>
            </div>
            <SiderbarLessonAddEdit />
        </div>
    );
}

export default LessonAdd;

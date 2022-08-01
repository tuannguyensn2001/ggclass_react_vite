import LessonHeader from '~/components/LessonHeader';
import SiderbarLessonAdd from '~/components/SiderbarLessonAdd';
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
            <SiderbarLessonAdd />
        </div>
    );
}

export default LessonAdd;

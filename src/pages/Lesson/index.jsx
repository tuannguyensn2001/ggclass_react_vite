import SidebarLeftLesson from '~/components/SidebarLeftLesson';
import LesssonContent from '~/components/LesssonContent';
import SiderbarRightLesson from '~/components/SiderbarRightLesson';
import LessonHeader from '~/components/LessonHeader';

import styles from './styles.module.css';

function Lesson() {
    return (
        <div className={styles.wrap}>
            <LessonHeader />
            <div className={styles.content}>
                <SidebarLeftLesson />
                <LesssonContent />
                <SiderbarRightLesson />
            </div>
        </div>
    );
}

export default Lesson;

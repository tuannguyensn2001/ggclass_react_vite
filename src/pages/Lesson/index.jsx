import SidebarLeftLesson from '~/components/SidebarLeftLesson';
import LesssonContent from '~/components/LesssonContent';
import SiderbarRightLesson from '~/components/SiderbarRightLesson';
import LessonHeader from '~/components/LessonHeader';

import styles from './styles.module.css';
const defaultData = [
    {
        video: 10,
        name: 'Sinh',
        viewer: 2,
        time: '28 tháng 7 lúc 14:44',
    },
];
function Lesson() {
    return (
        <div className={styles.wrap}>
            <LessonHeader />
            <div className={styles.content}>
                <SidebarLeftLesson />
                <LesssonContent data={defaultData} />
                <SiderbarRightLesson />
            </div>
        </div>
    );
}

export default Lesson;

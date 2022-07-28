import SidebarLeftLesson from '~/components/SidebarLeftLesson';
import LesssonContent from '~/components/LesssonContent';
import SiderbarRightLesson from '~/components/SiderbarRightLesson';
import styles from './styles.module.css';

function Lesson() {
    return (
        <div className={styles.wrap}>
            <div className={styles.header}>Bài giảng</div>
            <div className={styles.content}>
                <SidebarLeftLesson />
                <LesssonContent />
                <SiderbarRightLesson />
            </div>
        </div>
    );
}

export default Lesson;

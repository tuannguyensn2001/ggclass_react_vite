import SidebarLeftHomeWork from '~/components/SidebarLeftHomeWork';
import HomeWorkContent from '~/components/HomeWorkContent';
import SiderbarRightHomeWork from '~/components/SiderbarRightHomeWork';
import LessonHeader from '~/components/LessonHeader';

// @ts-ignore
import styles from './styles.module.css';

const defaultData = [
    {
        name: 'Sinh',
        style: 'Trắc nghiệm',
        type: 'pdf',
        value: '0/0 đã làm',
    },
];

function HomeWork() {
    return (
        <div className={styles.wrap}>
            <LessonHeader name="Bài tập" />
            <div className={styles.content}>
                <SidebarLeftHomeWork />
                <HomeWorkContent />
                <SiderbarRightHomeWork />
            </div>
        </div>
    );
}

export default HomeWork;

import SidebarLeftHomeWork from '~/components/SidebarLeftHomeWork';
import HomeWorkContent from '~/components/HomeWorkContent';
import SiderbarRightHomeWork from '~/components/SiderbarRightHomeWork';
import LessonHeader from '~/components/LessonHeader';

// @ts-ignore
import styles from './styles.module.css';
import SidebarLeftLesson from '~/components/SidebarLeftLesson';
import UseFolder from '~/hooks/useFolder';
import ModalAddFolder from '~/components/ModalAddFolder';
import { useParams } from 'react-router-dom';

const defaultData = [
    {
        name: 'Sinh',
        style: 'Trắc nghiệm',
        type: 'pdf',
        value: '0/0 đã làm',
    },
];

function HomeWork() {
    const {
        handleCloseModalAddFolder,
        handleOpenModalAddFolder,
        isOpenModalAddFolder,
        mutateCreateFolder,
        allFolder,
    } = UseFolder();

    const { id } = useParams();

    const handleCreate = (name: string) => {
        mutateCreateFolder({
            classId: Number(id),
            name,
        });
    };
    return (
        <div className={styles.wrap}>
            <LessonHeader name="Bài tập" />
            <div className={styles.content}>
                <SidebarLeftLesson
                    data={allFolder}
                    handleOpenModalAddFolder={handleOpenModalAddFolder}
                />
                <HomeWorkContent />
                <SiderbarRightHomeWork />
            </div>

            <ModalAddFolder
                handleCreate={handleCreate}
                open={isOpenModalAddFolder}
                handleClose={handleCloseModalAddFolder}
            />
        </div>
    );
}

export default HomeWork;

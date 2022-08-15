import SidebarLeftLesson from '~/components/SidebarLeftLesson';
import LesssonContent from '~/components/LesssonContent';
import SiderbarRightLesson from '~/components/SiderbarRightLesson';
import LessonHeader from '~/components/LessonHeader';
import useModal from '~/hooks/useModal';
import ModalAddFolder from '~/components/ModalAddFolder';
// @ts-ignore
import styles from './styles.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import UseFolder from '~/hooks/useFolder';
const defaultData = [
    {
        video: 10,
        name: 'Sinh',
        viewer: 2,
        time: '28 tháng 7 lúc 14:44',
    },
];
function Lesson() {
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
            <LessonHeader name="Bài giảng" />
            <div className={styles.content}>
                <SidebarLeftLesson
                    data={allFolder}
                    handleOpenModalAddFolder={handleOpenModalAddFolder}
                />
                <LesssonContent />
                <SiderbarRightLesson />
            </div>
            <ModalAddFolder
                handleCreate={handleCreate}
                open={isOpenModalAddFolder}
                handleClose={handleCloseModalAddFolder}
            />
        </div>
    );
}

export default Lesson;

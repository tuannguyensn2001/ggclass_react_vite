import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
// @ts-ignore
import styles from './styles.module.css';
import useFolderStore from '~/store/useFolderStore';
import { useQuery } from 'react-query';
import { getLessonByFolderId } from '~/repositories/lesson';
import useLessonStore from '~/store/useLessonStore';
import { useMemo } from 'react';
import { ILesson } from '~/models/ILesson';
import dayjs from '~/packages/dayjs';

const actions = [
    // {
    //     name: 'Xem bài giảng',
    //     Icon: OndemandVideoIcon,
    //     to: '',
    // },
    // {
    //     name: 'Chỉnh sửa',
    //     Icon: BorderColorIcon,
    //     to: 'alo/edit',
    // },
    {
        name: 'Di chuyển',
        Icon: FolderOpenIcon,
        to: '',
    },
    {
        name: 'Xóa bài giảng',
        Icon: DeleteOutlineIcon,
        to: '',
    },
];

function SiderbarRightLesson() {
    const id = useFolderStore((state) => state.id);

    const { data } = useQuery(['folders', id], () => getLessonByFolderId(Number(id)), {
        onSuccess(data) {},
    });

    const lessonId = useLessonStore((state) => state.id);

    const lesson = useMemo<ILesson | undefined>(() => {
        const result = data?.find((item) => item.id === Number(lessonId));
        return result;
    }, [data, lessonId]);

    const handleClickView = () => {
        window.open(lesson?.youtubeLink);
    };

    return (
        <div className={styles.wrap}>
            <div className={styles.top}>
                <h3 className={styles.header_top}>{lesson?.name}</h3>
                <div className={styles.top_content}>
                    <h4 className={styles.top_item}>
                        <h5 className={styles.top_name}>Đã xem</h5>
                        <span className={styles.title}>100</span>
                    </h4>
                    <h4 className={styles.top_item}>
                        <h5 className={styles.top_name}>Ngày tạo</h5>
                        <span className={styles.title}>
                            {dayjs(lesson?.createdAt).format('HH:mm:ss DD/MM/YYYY')}
                        </span>
                    </h4>
                </div>
            </div>
            <div className={styles.bottom}>
                <div onClick={handleClickView} className={styles.bottom_item}>
                    <h4 className={styles.name}>Xem bài giảng</h4>
                    <h5 className={styles.icon}>
                        <OndemandVideoIcon />
                    </h5>
                </div>
                <Link to={`${lessonId}/edit`} className={styles.bottom_item}>
                    <h4 className={styles.name}>Sửa</h4>
                    <h5 className={styles.icon}>
                        <BorderColorIcon />
                    </h5>
                </Link>
                {actions.map((item, index) => (
                    <Link to={item?.to} key={index} className={styles.bottom_item}>
                        <h4 className={styles.name}>{item?.name}</h4>
                        <h5 className={styles.icon}>
                            <item.Icon />
                        </h5>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SiderbarRightLesson;

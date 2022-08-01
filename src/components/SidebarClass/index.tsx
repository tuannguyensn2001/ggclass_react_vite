import SiderbarClassItem from '~/components/SiderbarClassItem';
import SiderbarClassHeader from '~/components/SiderbarClassHeader';
// @ts-ignore
import styles from './styles.module.css';
import NewspaperIcon from '@mui/icons-material/Newspaper';

import EventNoteIcon from '@mui/icons-material/EventNote';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import TaskIcon from '@mui/icons-material/Task';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsIcon from '@mui/icons-material/Settings';
import { useLocation, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import useDetailClass from '~/hooks/useDetailClass';

function SidebarClass() {
    const location = useLocation();

    const menu = useMemo(() => {
        return [
            {
                icon: NewspaperIcon,
                text: 'Bảng tin',
                to: 'newsfeed',
            },
            {
                icon: EventNoteIcon,
                text: 'Lịch học',
                to: 'schedule',
            },
            {
                icon: PersonOutlineIcon,
                text: 'Thành viên',
                to: 'member',
            },
            // {
            //     icon: WorkOutlineIcon,
            //     text: 'Vai trò lớp',
            //     to: 'assistance',
            // },
            // {
            //     icon: PeopleOutlineIcon,
            //     text: 'Nhóm hoc tập',
            //     to: 'group',
            // },
            {
                icon: TaskIcon,
                text: 'Bài tập',
                to: 'homework',
            },
            // {
            //     icon: VerticalSplitIcon,
            //     text: 'Bảng điểm',
            //     to: 'scoretable',
            // },
            {
                icon: PlayCircleOutlineIcon,
                text: 'Bài giảng',
                to: 'lesson',
            },
            // {
            //     icon: SummarizeIcon,
            //     text: 'Tài liệu',
            //     to: 'file',
            // },
            {
                icon: SettingsIcon,
                text: 'Cài đặt lớp học',
                to: 'edit',
                footer: true,
            },
        ];
    }, []);

    const active = useMemo(() => {
        const { pathname } = location;

        const result = menu.find((item) => pathname.includes(item.to));
        return result?.to;
    }, [location]);

    return (
        <div className={styles.wrap}>
            <div className={styles.header}>
                <SiderbarClassHeader />
            </div>
            <div className={styles.infor}>Danh mục</div>
            <div className={styles.list}>
                {menu.map((item, index) => {
                    if (!item?.footer) {
                        return (
                            <SiderbarClassItem
                                active={item.to === active}
                                key={index}
                                Icon={item?.icon}
                                to={item?.to}
                                text={item?.text}
                                footer={Boolean(item?.footer)}
                            />
                        );
                    }
                })}
            </div>
            <div className={styles.footer}>
                {menu.map((item, index) => {
                    if (item?.footer) {
                        return (
                            <SiderbarClassItem
                                key={index}
                                Icon={item?.icon}
                                to={item?.to}
                                text={item?.text}
                                footer={true}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default SidebarClass;

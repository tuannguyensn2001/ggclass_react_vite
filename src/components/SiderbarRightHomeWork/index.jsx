import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MouseIcon from '@mui/icons-material/Mouse';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import clsx from 'clsx';
const actions = [
    {
        name: 'Làm thử',
        Icon: OndemandVideoIcon,
        to: '',
    },
    {
        name: 'Chi tiết',
        Icon: MouseIcon,
        to: 'alo/edit',
        active: true,
    },
    {
        name: 'Di chuyển',
        Icon: FolderOpenIcon,
        to: '',
    },
    {
        name: 'Chỉnh sửa',
        Icon: BorderColorIcon,
        to: '',
    },
    ,
    {
        name: 'Xóa',
        Icon: DeleteOutlineIcon,
        to: '',
    },
];

function SiderbarRightHomeWork() {
    const contents = [
        {
            name: 'Số lần làm bài',
            value: '1',
            nameApi: '',
        },
        {
            name: 'Lấy điểm',
            value: 'Lần đầu tiên',
        },
        {
            name: 'Ngày tạo',
            value: '3 tháng 8',
        },
        {
            name: 'Bắt đầu',
            value: 'Không có',
        },
        {
            name: 'Thời lượng',
            value: 'Không có',
        },
        {
            name: 'Đã làm',
            value: '0 / 0',
        },
        {
            name: 'Cho phép',
            value: 'Chỉ xem điểm',
        },
        {
            name: 'Hạn chót',
            value: 'Không có',
        },
    ];
    return (
        <div className={styles.wrap}>
            <div className={styles.top}>
                <h3 className={styles.header_top}>Sinh</h3>
                <div className={styles.share}></div>
                <div className={styles.top_content}>
                    {contents.map((item) => (
                        <h4 key={item.name} className={styles.top_item}>
                            <h5 className={styles.top_name}>{item.name}</h5>
                            <span className={styles.title}>{item.value}</span>
                        </h4>
                    ))}
                </div>
            </div>
            <div className={styles.bottom}>
                {actions.map((item, index) => (
                    <Link
                        to={item?.to}
                        key={index}
                        className={clsx(styles.bottom_item, {
                            [styles.focus]: item?.active,
                        })}
                    >
                        <h4 className={styles.name}>{item?.name}</h4>
                        <h5 className={styles.icon}>
                            <item.Icon sx={{ fontSize: 20 }} />
                        </h5>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SiderbarRightHomeWork;

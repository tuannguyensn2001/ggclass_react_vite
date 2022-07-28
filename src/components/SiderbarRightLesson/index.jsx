import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import styles from './styles.module.css';
const actions = [
    {
        name: 'Xem bài giảng',
        Icon: OndemandVideoIcon,
    },
    {
        name: 'Chỉnh sửa',
        Icon: BorderColorIcon,
    },
    {
        name: 'Di chuyển',
        Icon: FolderOpenIcon,
    },
    {
        name: 'Xóa bài giảng',
        Icon: DeleteOutlineIcon,
    },
];

function SiderbarRightLesson() {
    return (
        <div className={styles.wrap}>
            <div className={styles.top}>
                <h3 className={styles.header_top}>Sinh</h3>
                <div className={styles.top_content}>
                    <h4 className={styles.top_item}>
                        <h5 className={styles.top_name}>Đã xem</h5>
                        <span className={styles.title}>0</span>
                    </h4>
                    <h4 className={styles.top_item}>
                        <h5 className={styles.top_name}>Ngày tạo</h5>
                        <span className={styles.title}>28 tháng 7 lúc 14:44</span>
                    </h4>
                </div>
            </div>
            <div className={styles.bottom}>
                {actions.map((item, index) => (
                    <div key={index} className={styles.bottom_item}>
                        <h4 className={styles.name}>{item.name}</h4>
                        <h5 className={styles.icon}>
                            <item.Icon />
                        </h5>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SiderbarRightLesson;

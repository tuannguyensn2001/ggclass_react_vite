import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CropSquareIcon from '@mui/icons-material/CropSquare';

// @ts-ignore
import styles from './styles.module.css';

function ScheduleDetailclasses() {
    return (
        <div className={styles.wrap}>
            <div className={styles.top}>
                <button className={styles.button}>Chi tiết</button>
                <div className={styles.list_icons}>
                    <div className={styles.icon_item}>
                        <RadioButtonCheckedIcon />
                    </div>
                    <div className={styles.icon_item}>
                        <EditIcon />
                    </div>
                    <div className={styles.icon_item}>
                        <DeleteOutlineIcon />
                    </div>
                    <div className={styles.icon_item}>
                        <CloseIcon />
                    </div>
                </div>
            </div>
            <div className={styles.name}>Lớp Võ Mạnh Cường</div>
            <div className={styles.bottom}>
                <div className={styles.bottom_item}>
                    <div className={styles.icon_bottom_wrap}>
                        <CropSquareIcon className={styles.icon_bottom} />
                    </div>
                    <div className={styles.text}>Tên phòng: Phòng 1</div>
                </div>
                <div className={styles.bottom_item}>
                    <div className={styles.icon_bottom_wrap}>
                        <img
                            className={styles.icon_bottom}
                            src="https://shub.edu.vn/images/icons/schedule_offline.svg"
                        />
                    </div>
                    <div className={styles.text}>Loại phòng: Offline</div>
                </div>
                <div className={styles.bottom_item}>
                    <div className={styles.icon_bottom_wrap}>
                        <AccessTimeIcon className={styles.icon_bottom} />
                    </div>
                    <div className={styles.text}>Bắt đầu: 20 tháng 6 lúc 7:00</div>
                </div>
                <div className={styles.bottom_item}>
                    <div className={styles.icon_bottom_wrap}>
                        <img className={styles.icon_bottom} src="https://shub.edu.vn/images/icons/user-check.svg" />
                    </div>
                    <div className={styles.text}>Điểm danh: 9/9</div>
                </div>
            </div>
        </div>
    );
}

export default ScheduleDetailclasses;

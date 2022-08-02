// @ts-ignore
import styles from './styles.module.css';
import clsx from 'clsx';
import CloseIcon from '@mui/icons-material/Close';

function NewFeedNotification() {
    return (
        <div className={styles.wrap}>
            <div className={styles.left}>
                <h6 className={styles.header}>
                    Một bản ballad thật sâu đậm, ý nghĩa, chất liệu âm nhạc tuyệt vời. Chúc ca khúc này vươn tầm thế
                    giới và ngày càng nhiều người cảm nhận !
                </h6>
                <p className={styles.time}>time</p>
            </div>
            <div className={styles.close}>
                <CloseIcon sx={{ fontSize: 20 }} />
            </div>
        </div>
    );
}

export default NewFeedNotification;

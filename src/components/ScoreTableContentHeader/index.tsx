import styles from './styles.module.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
function ScoreTableContentHeader() {
    return (
        <div className={styles.wrap}>
            <div className={styles.item}>
                <div className={styles.path_1}>
                    <div className={styles.left_path_1}></div>
                    Họ và tên
                    <div className={styles.right_path_1}>
                        <ArrowUpwardIcon sx={{ fontSize: 18, color: '#65697B' }} />
                    </div>
                </div>
                <div className={styles.listSubject}>
                    <div className={styles.subject_item}>trung bình</div>
                </div>
            </div>
        </div>
    );
}

export default ScoreTableContentHeader;

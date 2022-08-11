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
                    <div className={styles.left_path_1}>
                        <Avatar alt="Remy Sharp" sx={{ width: 34, height: 34 }} />
                    </div>
                    Võ mạnh vường
                </div>
                <div className={styles.listSubject}>
                    <div className={styles.subject_item}>10</div>
                </div>
            </div>
        </div>
    );
}

export default ScoreTableContentHeader;

import { Button, TextareaAutosize, TextField } from '@mui/material';
import styles from './styles.module.css';
import FindInPageIcon from '@mui/icons-material/FindInPage';
function SiderbarLessonEdit() {
    return (
        <div className={styles.wrap}>
            <div className={styles.item}>
                <div className={styles.name}>Tên bài giảng</div>
                <div className={styles.input}>
                    <TextField
                        style={{
                            width: '100%',
                        }}
                        InputProps={{
                            style: {
                                height: 38,
                                border: 'none',
                            },
                        }}
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.name}>Mô tả</div>
                <div className={styles.input}>
                    <TextareaAutosize
                        className={styles.aria}
                        aria-label="empty textarea"
                        minRows={6}
                        style={{ width: '100%' }}
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.name}>Bài tập đính kèm</div>
                <div className={styles.button}>
                    <div className={styles.icon}>
                        <FindInPageIcon />
                    </div>
                    <div className={styles.title}>Chọn bài tập</div>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.name}>Bài giảng đính kèm</div>
                <div className={styles.button}>
                    <div className={styles.icon}>
                        <FindInPageIcon />
                    </div>
                    <div className={styles.title}>Chọn tài liệu</div>
                </div>
            </div>
        </div>
    );
}

export default SiderbarLessonEdit;

import TextField from '@mui/material/TextField';
import styles from './styles.module.css';

function BoxInputLessonAdd() {
    return (
        <div className={styles.wrap}>
            <h6 className={styles.header}>Tạo bài giảng từ Youtube hoặc Facebook Video</h6>
            <p className={styles.title}>Có thể tải nhiều bài giảng video bằng cách nhập link playlist từ Youtube</p>
            <TextField
                className={styles.input}
                placeholder="Nhập link youtube/facebook video tại đây..."
                id="outlined-basic"
                variant="outlined"
            />
        </div>
    );
}

export default BoxInputLessonAdd;

// @ts-ignore
import styles from './styles.module.css';

function NewsfeedSiderBarRight() {
    return (
        <div className={styles.wrap}>
            <div className={styles.header}>
                <h4 className={styles.text_header}>Thông báo</h4>
                <button className={styles.button}>+ Thêm thông báo</button>
            </div>
            <div className={styles.content}>
                <div className={styles.noNotify}>
                    <span className={styles.dark}>Lớp học chưa có thông báo</span> Nội dung thông báo của giáo viên sẽ
                    xuất hiện ở đây
                </div>
            </div>
        </div>
    );
}

export default NewsfeedSiderBarRight;

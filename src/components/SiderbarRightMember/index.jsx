
import styles from './styles.module.css'
import clsx from 'clsx'
import Button from '@mui/material/Button'
function SiderbarRightMember() {
    return (
        <div className={styles.wrap}>
            <div className={styles.content}>
                <div className={styles.header}>Chờ duyệt(1)</div>
                <div className={styles.info}>
                    <Button className={styles.accept}>Phê duyệt tất cả</Button>
                    <Button className={styles.refuse}>Từ chôí tất cả</Button>
                    <div className={styles.user_wrap}>
                        <div className={styles.user}>
                            <div className={styles.avatar}></div>
                            <div className={styles.name}>Nguyễn Khánh Linh</div>
                        </div>
                        <div className={styles.action}>
                            <Button className={clsx(styles.accept,styles.)}>Duyệt</Button>
                             <Button className={clsx(styles.refuse,styles.small)}>Xóa</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SiderbarRightMember;
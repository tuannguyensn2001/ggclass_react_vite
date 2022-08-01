import clsx from 'clsx';
import styles from './styles.module.css';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
interface profileInfoItemProps {
    Left_icon: string;
    title: string;
    value: string;
    edit: boolean;
    copy: boolean;
}

function ProfileInfoItem({ Left_icon, title, value, edit, copy }: profileInfoItemProps) {
    return (
        <div className={styles.wrap}>
            <div className={styles.left}>
                <div className={styles.icon_left}>
                    <img src={Left_icon} alt="icon" className={styles.img_icon} />
                </div>
                <h5 className={styles.title}>{title}</h5>
            </div>
            <div className={styles.mid}>
                <h5 className={styles.title}>{value}</h5>
                <div
                    className={clsx(styles.icon_mid, {
                        [styles.hide]: !copy,
                    })}
                >
                    <ContentCopyIcon sx={{ fontSize: 20 }} />
                </div>
            </div>
            <div
                className={clsx(styles.edit, {
                    [styles.hide]: !edit,
                })}
            >
                Chỉnh sửa
            </div>
        </div>
    );
}

export default ProfileInfoItem;

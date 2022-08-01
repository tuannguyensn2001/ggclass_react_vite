import CheckIcon from '@mui/icons-material/Check';

import styles from './styles.module.css';
function ProfileHeader() {
    return (
        <div className={styles.wrap}>
            <h3 className={styles.name}>Hồ sơ của tôi</h3>
            <div className={styles.button}>
                <div className={styles.icon}>
                    <CheckIcon />
                </div>
                <h6 className={styles.title}>Tài khoản an toàn </h6>
            </div>
        </div>
    );
}

export default ProfileHeader;

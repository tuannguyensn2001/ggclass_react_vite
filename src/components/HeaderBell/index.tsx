import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';

// @ts-ignore
import styles from './styles.module.css';

function HeaderBell() {
    return (
        <Tippy content="Thông báo">
            <div className={styles.bell}>
                <Avatar className={styles.bell_wrap} alt="Remy Sharp">
                    <NotificationsIcon className={styles.bell_icon} />
                </Avatar>
            </div>
        </Tippy>
    );
}

export default HeaderBell;

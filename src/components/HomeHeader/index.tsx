import { Button } from '@mui/material';
import clsx from 'clsx';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

function HomeHeader() {
    return (
        <div className={styles.wrap}>
            <ul className={styles.left}>
                <li className={styles.leftItem}>Giới thiệu</li>
                <li className={styles.leftItem}>Tính năng</li>
                <li className={styles.leftItem}>Đối tác</li>
                <li className={styles.leftItem}>Liên hệ</li>
            </ul>
            <div className={styles.logo}>
                <img src="https://shub.edu.vn/images/landing/ver3/header-section/logo.svg" alt="logo" />
            </div>
            <div className={styles.right}>
                <Link className={styles.link} to="/login">
                    <Button className={clsx(styles.rightItem, styles.login)} variant="contained">
                        Đăng Nhập
                    </Button>
                </Link>
                <Link className={styles.link} to="/register">
                    <Button className={clsx(styles.rightItem, styles.resgister)} variant="contained">
                        Đăng ký
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default HomeHeader;

import { Button } from '@mui/material';
import HomePartOneItem from '~/components/HomePartOneItem';
import clsx from 'clsx';
import styles from './styles.module.css';

function HomePartOne() {
    return (
        <div className={styles.wrap}>
            <div className={styles.left}>
                <div className={styles.leftWrap}>
                    <div className={styles.logo}>
                        <img
                            src="https://shub.edu.vn/images/landing/ver3/hero-section/logo-shub-circle.svg"
                            alt="logo"
                        />
                        <p className={styles.logoTitle}>Shub classroom</p>
                    </div>
                    <h2 className={styles.header}>Một cách hiệu quả để quản lý lớp học</h2>
                    <Button className={styles.button} variant="contained">
                        Tham gia ngay
                    </Button>
                    <div className={styles.list}>
                        <HomePartOneItem
                            urlImg="https://shub.edu.vn/images/landing/ver3/hero-section/hero-icon-1.svg"
                            title="Cung cấp tài nguyên cho học sinh"
                        />
                        <HomePartOneItem
                            urlImg="https://shub.edu.vn/images/landing/ver3/hero-section/hero-icon-2.svg"
                            title="Khai thác học liệu"
                        />
                        <HomePartOneItem
                            urlImg="https://shub.edu.vn/images/landing/ver3/hero-section/hero-icon-3.svg"
                            title="Giao bài tập"
                        />
                        <HomePartOneItem
                            urlImg="https://shub.edu.vn/images/landing/ver3/hero-section/hero-icon-4.svg"
                            title="Thi trực tuyến"
                        />
                        <HomePartOneItem
                            urlImg="https://shub.edu.vn/images/landing/ver3/hero-section/hero-icon-5.svg"
                            title="Tổ chức lớp học trực tuyến"
                        />
                        <HomePartOneItem
                            urlImg="https://shub.edu.vn/images/landing/ver3/hero-section/hero-icon-6.svg"
                            title="Tạo nhiệm vụ học tập"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <img
                    className={styles.rightImg}
                    src="https://i.pinimg.com/originals/71/4e/c4/714ec474db7fe0a3b55d34aa6ec247e8.jpg"
                    alt="img"
                />
            </div>
        </div>
    );
}

export default HomePartOne;

import { Button } from '@mui/material';
import clsx from 'clsx';
import Slider from 'react-slick';
import HomePartFourItem from '~/components/HomePartFourItem';
import FacebookIcon from '@mui/icons-material/Facebook';
import styles from './styles.module.css';

function HomeFooter() {
    return (
        <div className={styles.wrap}>
            <div className={styles.left}>
                <img
                    className={styles.logo}
                    src="https://shub.edu.vn/images/landing/ver3/footer-section/shub-logo.svg"
                    alt="logo"
                />
                <h3 className={styles.left_header}>CÔNG TY CỔ PHẦN CÔNG NGHỆ SHUB</h3>
                <p className={styles.left_title}>©Copyright 2022 SHub Classroom. All Rights Reserved</p>
            </div>
            <div className={styles.mid}>
                <h3 className={styles.mid_header}>Số điện thoại</h3>
                <p className={styles.mid_title}>0852747303</p>
                <h3 className={styles.mid_header}>Email</h3>
                <p className={styles.mid_title}>khongphaicuong@gmail.com</p>
                <h3 className={styles.mid_header}>Địa chỉ</h3>
                <p className={styles.mid_title}>
                    Khu Công nghệ Phần mềm, ĐHQG-HCM Kp6, P. Linh Trung, Tp. Thủ Đức, Tp. Hà Nội
                </p>
            </div>
            <div className={styles.right}>
                <h3 className={styles.right_header}>Thông tin</h3>
                <p className={styles.right_title}>Chính sách bảo mật</p>
                <p className={styles.right_title}>Chính sách hoàn trả</p>
                <p className={styles.right_title}>Điều khoản sử dụng</p>
                <h3 className={styles.right_header}>Kết nối với chúng tôi </h3>
                <FacebookIcon sx={{ fontSize: 25 }} />
            </div>
        </div>
    );
}
export default HomeFooter;

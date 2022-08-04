import { Button } from '@mui/material';
import HomePartThreeItem from '~/components/HomePartThreeItem';
import clsx from 'clsx';
import styles from './styles.module.css';

const items = [
    {
        urlImg: 'https://shub.edu.vn/images/landing/ver3/number-section/number-section-item1.png',
        number: '2.000',
        title: 'Trường học',
    },
    {
        urlImg: 'https://shub.edu.vn/images/landing/ver3/number-section/number-section-item2.png',
        number: '500.000',
        title: 'Lớp học',
    },
    {
        urlImg: 'https://shub.edu.vn/images/landing/ver3/number-section/number-section-item3.png',
        number: '3 Triệu',
        title: 'Học sinh',
    },
    {
        urlImg: 'https://shub.edu.vn/images/landing/ver3/number-section/number-section-item4.png',
        number: '100.000',
        title: 'Giáo viên',
    },
];

function HomePartThree() {
    return (
        <div className={styles.wrap}>
            <div className={styles.left}>
                <div className={styles.leftWrap}>
                    <h2 className={styles.header}>SHub đồng hành cùng giáo dục cả nước</h2>
                    <h1 className={styles.title}>
                        <span className={styles.red}>
                            Có mặt trên 63 tỉnh thành, với hơn 3.000.000 người dùng mỗi ngày{' '}
                        </span>
                        cho việc dạy và học, SHub trở thành cộng đồng giáo dục trực tuyến, môi trường học tập, giảng dạy
                        và chia sẻ rộng lớn.
                    </h1>
                    <div className={styles.list}>
                        {items.map((item) => (
                            <HomePartThreeItem
                                key={item.number}
                                number={item.number}
                                title={item.title}
                                urlImg={item.urlImg}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <img
                    className={styles.rightImg}
                    src="https://upload.wikimedia.org/wikipedia/commons/3/30/Map-of-Vietnam-Divisions.svg"
                    alt="img"
                />
            </div>
        </div>
    );
}

export default HomePartThree;

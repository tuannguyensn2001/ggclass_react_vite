import clsx from 'clsx';

import styles from './styles.module.css';

function CardVideo() {
    return (
        <div className={styles.wrap}>
            <div className={styles.card}>
                <div className={styles.top}>
                    <div className={styles.background}></div>
                    <div className={styles.name}>50 video</div>
                </div>
                <div className={styles.bottom}>
                    <div className={clsx(styles.header, styles.active)}>Sinh</div>
                    <div className={styles.title}>0 đã xem 28 tháng 7 lúc 14:44</div>
                </div>
            </div>
        </div>
    );
}

export default CardVideo;

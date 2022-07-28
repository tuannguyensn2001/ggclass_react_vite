import clsx from 'clsx';

import styles from './styles.module.css';
import PropTypes from 'prop-types';

function CardVideo({ video, name, viewer, time }) {
    return (
        <div className={styles.wrap}>
            <div className={styles.card}>
                <div className={styles.top}>
                    <div className={styles.background}></div>
                    <div className={styles.name}>{video} video</div>
                </div>
                <div className={styles.bottom}>
                    <div className={clsx(styles.header, styles.active)}>{name}</div>
                    <div className={styles.title}>
                        {viewer} đã xem {time}
                    </div>
                </div>
            </div>
        </div>
    );
}
CardVideo.propTypes = {
    name: PropTypes.string,
    viewer: PropTypes.number,
    video: PropTypes.number,
    time: PropTypes.string,
};

export default CardVideo;

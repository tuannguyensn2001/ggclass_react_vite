import clsx from 'clsx';

// @ts-ignore
import styles from './styles.module.css';
import PropTypes from 'prop-types';
import dayjs from '~/packages/dayjs';

function CardVideo({ video, name, viewer, time, createdAt, thumbnail, active, id, onClick }: any) {
    const handleClick = () => {
        onClick(id);
    };
    return (
        <div onClick={handleClick} className={styles.wrap}>
            <div className={styles.card}>
                <div className={styles.top}>
                    {/*<div*/}
                    {/*    className={styles.background}*/}
                    {/*    style={{ backgroundImage: `url('${thumbnail}')` }}*/}
                    {/*></div>*/}
                    <img
                        src={thumbnail}
                        alt=""
                        className={'tw-w-full tw-h-48 tw-object-cover   '}
                    />
                    {/*<div className={styles.name}>{video} video</div>*/}
                </div>
                <div className={styles.bottom}>
                    <div className={clsx(styles.header, { [styles.active]: active })}>{name}</div>
                    <div className={styles.title}>
                        {/*{viewer} đã xem {time}*/}
                        {dayjs(createdAt).format('HH:mm:ss DD/MM/YYYY')}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardVideo;

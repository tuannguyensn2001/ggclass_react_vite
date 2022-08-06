import clsx from 'clsx';
import styles from './styles.module.css';
function HomePartTwoItem({ videoTop = false, videoRight = false, header, title, urlVideo }) {
    return (
        <div
            className={clsx(styles.wrap, {
                [styles.videoRight]: videoRight,
                [styles.videoTop]: videoTop,
            })}
        >
            <div
                className={clsx(styles.video, {
                    [styles.widthFull]: videoTop,
                })}
            >
                <iframe className={styles.iframe} src={urlVideo}></iframe>
            </div>
            <div
                className={clsx(styles.content, {
                    [styles.widthFull]: videoTop,
                })}
            >
                <h2 className={styles.header}>{header}</h2>
                <p className={styles.title}>{title}</p>
            </div>
        </div>
    );
}
export default HomePartTwoItem;

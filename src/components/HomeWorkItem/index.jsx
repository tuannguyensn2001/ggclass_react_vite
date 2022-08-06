import styles from './style.module.scss';
import clsx from 'clsx';

const types = [
    {
        type: 'word',
        url: 'https://shub.edu.vn/images/icons/doc_blue.png',
    },
    {
        type: 'pdf',
        url: 'https://shub.edu.vn/images/icons/pdf_red.png',
    },
    {
        type: 'otherType',
        url: 'https://shub.edu.vn/images/icons/slide.png',
    },
];

function HomeWorkItem({ type, active = true, name, style, value }) {
    const typeCurrent = types.find((item) => item.type === type);
    return (
        <div
            className={clsx(styles.wrap, {
                [styles.active]: active,
            })}
        >
            <div className={styles.icon}>
                <img className={styles.img} src={typeCurrent.url} alt="file" />
            </div>
            <div className={styles.mid}>
                <h6 className={styles.name}>{name}</h6>
                <div className={styles.loading}></div>
                <div className={styles.title}>{style}</div>
            </div>
            <div className={styles.right}>{value}</div>
        </div>
    );
}
export default HomeWorkItem;

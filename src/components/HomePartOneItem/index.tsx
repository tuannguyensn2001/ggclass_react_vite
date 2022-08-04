import styles from './styles.module.css';
function HomePartOneItem({ urlImg = '', title = '' }) {
    return (
        <div className={styles.wrap}>
            <img className={styles.img} src={urlImg} alt="img" />
            <h4 className={styles.title}>{title}</h4>
        </div>
    );
}
export default HomePartOneItem;

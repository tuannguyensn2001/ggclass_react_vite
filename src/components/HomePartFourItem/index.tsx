import styles from './styles.module.css';
function HomePartFourItem({ title = '' }) {
    return (
        <div className={styles.wrap}>
            <div className={styles.street}></div>
            <h4 className={styles.title}>{title}</h4>
        </div>
    );
}
export default HomePartFourItem;

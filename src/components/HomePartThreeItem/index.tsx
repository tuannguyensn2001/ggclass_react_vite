import styles from './styles.module.css';
function HomePartThreeItem({ urlImg = '', number = '', title = '' }) {
    return (
        <div className={styles.wrap}>
            <img className={styles.img} src={urlImg} alt="img" />
            <h4 className={styles.name}>{number}</h4>
            <h2 className={styles.title}>{title}</h2>
        </div>
    );
}
export default HomePartThreeItem;

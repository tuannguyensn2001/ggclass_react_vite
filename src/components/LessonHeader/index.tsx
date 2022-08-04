import styles from './styles.module.css';

function LessonHeader({ name }: string) {
    return <div className={styles.header}>{name}</div>;
}

export default LessonHeader;

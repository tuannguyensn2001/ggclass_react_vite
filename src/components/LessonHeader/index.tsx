import styles from './styles.module.css';

interface Prop {
    name: string;
}

function LessonHeader({ name }: Prop) {
    return <div className={styles.header}>{name}</div>;
}

export default LessonHeader;

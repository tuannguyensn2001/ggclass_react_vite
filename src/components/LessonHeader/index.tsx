// @ts-ignore
import styles from './styles.module.css';
interface Props {
    name: string;
}

function LessonHeader({ name }: Props) {
    return <div className={styles.header}>{name}</div>;
}

export default LessonHeader;

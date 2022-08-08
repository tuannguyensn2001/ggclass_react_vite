// @ts-ignore
import styles from './styles.module.css';
<<<<<<< HEAD
interface Props {
    name: string;
}
function LessonHeader({ name }: Props) {
=======

interface Prop {
    name: string;
}

function LessonHeader({ name }: Prop) {
>>>>>>> 5100849dcf63abe74949bb2c07aa90e7c4491630
    return <div className={styles.header}>{name}</div>;
}

export default LessonHeader;

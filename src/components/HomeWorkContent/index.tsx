import HomeWorkContentHeader from '~/components/HomeWorkContentHeader';
// @ts-ignore
import styles from './styles.module.css';
import HomeWorkItem from '~/components/HomeWorkItem';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { IExercise } from '~/models/IExercise';
import { getExercisesByClass } from '~/repositories/exercise';

function HomeWorkContent() {
    const { id } = useParams();

    const { data } = useQuery<IExercise[]>(['exercises', id], () => getExercisesByClass(Number(id)));

    return (
        <div className={styles.wrap}>
            <HomeWorkContentHeader />
            <div className={styles.list_card}>
                {data?.map((item) => (
                    <HomeWorkItem key={item.id} name={item?.name} active={false} />
                ))}
            </div>
        </div>
    );
}

export default HomeWorkContent;

import HomeWorkContentHeader from '~/components/HomeWorkContentHeader';
// @ts-ignore
import styles from './styles.module.css';
import HomeWorkItem from '~/components/HomeWorkItem';
import useGetExerciseInClass from '~/hooks/useGetExercisesInClass';
import useExercisesInClassStore from '~/store/useExercisesInClassStore';

function HomeWorkContent() {
    const { data } = useGetExerciseInClass();

    const { id, setId } = useExercisesInClassStore((state) => state);

    const handleClickItem = (item: number) => {
        setId(item);
    };

    return (
        <div className={styles.wrap}>
            <HomeWorkContentHeader />
            <div className={styles.list_card}>
                {data?.map((item) => (
                    <HomeWorkItem
                        onClick={handleClickItem}
                        id={item.id}
                        key={item.id}
                        name={item?.name}
                        active={id === item.id}
                        totalMembers={item.totalMembersInClass}
                        totalDoExercise={item.totalMembersDoExercise}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomeWorkContent;

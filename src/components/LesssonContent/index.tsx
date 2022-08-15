import LesssonContentHeader from '~/components/LesssonContentHeader';
import CardVideo from '~/components/CardVideo';
// @ts-ignore
import styles from './styles.module.css';
import useFolderStore from '~/store/useFolderStore';
import { useQuery } from 'react-query';
import { getLessonByFolderId } from '~/repositories/lesson';
import useLessonStore from '~/store/useLessonStore';

function LesssonContent() {
    const id = useFolderStore((state) => state.id);

    const { data } = useQuery(['folders', id], () => getLessonByFolderId(Number(id)), {
        onSuccess(data) {
            setId(data[0].id);
        },
    });

    const { id: lessonId, setId } = useLessonStore((state) => state);

    return (
        <div className={styles.wrap}>
            <LesssonContentHeader />
            <div className={styles.list_card}>
                {data && data?.length > 0 ? (
                    data.map((item: any, index: any) => (
                        <CardVideo
                            id={item?.id}
                            active={item?.id === lessonId}
                            onClick={(id: any) => setId(Number(id))}
                            key={item?.name}
                            name={item?.name}
                            video={item?.video}
                            viewer={item?.viewer}
                            time={item?.time}
                            createdAt={item?.createdAt}
                            thumbnail={item?.thumbnail}
                        />
                    ))
                ) : (
                    <div className={styles.noVideo}>Lớp học chưa có bài giảng nào</div>
                )}
            </div>
        </div>
    );
}

export default LesssonContent;

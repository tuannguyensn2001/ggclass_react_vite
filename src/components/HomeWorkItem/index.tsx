// @ts-ignore
import styles from './style.module.scss';
import clsx from 'clsx';
import useExercisesInClassStore from '~/store/useExercisesInClassStore';

const types = [
    {
        type: 'word',
        url: 'https://shub.edu.vn/images/icons/doc_blue.png',
    },
    {
        type: 'pdf',
        url: 'https://shub.edu.vn/images/icons/pdf_red.png',
    },
    {
        type: 'otherType',
        url: 'https://shub.edu.vn/images/icons/slide.png',
    },
];

interface Prop {
    name: string;
    active?: boolean;
    id: number;
    onClick: (id: number) => void;
}

function HomeWorkItem({ active = true, name, id, onClick }: Prop) {
    const type = 'pdf';
    const typeCurrent = types.find((item) => item.type === type);

    const handleClick = () => {
        onClick(id);
    };
    return (
        <div
            onClick={handleClick}
            className={clsx(styles.wrap, {
                [styles.active]: active,
            })}
        >
            <div className={styles.icon}>{<img className={styles.img} src={typeCurrent?.url} alt="file" />}</div>
            <div className={styles.mid}>
                <h6 className={styles.name}>{name}</h6>
                <div className={styles.loading}></div>
                <div className={styles.title}>Trac nghiem</div>
            </div>
            <div className={styles.right}>0/0 da lam</div>
        </div>
    );
}

export default HomeWorkItem;

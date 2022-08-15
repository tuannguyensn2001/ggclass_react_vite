// @ts-ignore
import styles from './style.module.scss';
import clsx from 'clsx';

interface Prop {
    name: string;
    onClick: (id: number) => void;
    id?: number;
    active?: boolean;
}

function FolderItem({ name, onClick, id, active = false }: Prop) {
    const handleClick = () => {
        onClick(Number(id));
    };

    return (
        <div
            onClick={handleClick}
            className={clsx(styles.head, styles.lessons, {
                'tw-text-blue-500 tw-font-bold': active,
            })}
        >
            <img
                className={styles.img}
                src="https://icons-for-free.com/download-icon-files+folder+icon-1320196394707568948_512.png"
                alt=""
            />
            <div className={styles.lesson}>
                <p className={styles.class_name}>{name}</p>
                <img
                    className={styles.img_option}
                    src="https://www.shareicon.net/data/512x512/2016/06/04/775696_interface_512x512.png"
                    alt=""
                />
            </div>
        </div>
    );
}

export default FolderItem;

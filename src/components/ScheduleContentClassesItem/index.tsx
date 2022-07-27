import 'tippy.js/dist/tippy.css';

// @ts-ignore
import styles from './styles.module.css';

interface Prop {
    time: string;
    name: string;
    number: number;
}

function ScheduleContentClassesItem({ time, name, number }: Prop) {
    return (
        <div className={styles.wrap}>
            <div className={styles.classes}>
                <div className={styles.header}>
                    <img
                        src="https://shub.edu.vn/images/icons/schedule_offline.svg"
                        alt="class"
                        className={styles.img_class}
                    />
                    <div className={styles.time}>Bắt đầu: {time}</div>
                </div>
                <div className={styles.text}>{name}</div>
                <div className={styles.bottom}>
                    <div className={styles.img_checkP}>
                        <img src="https://shub.edu.vn/images/icons/user-check-white.svg" alt="check people" />
                    </div>
                    <div className={styles.bottom_text}>Điểm danh: {number}</div>
                </div>
            </div>
        </div>
    );
}

export default ScheduleContentClassesItem;

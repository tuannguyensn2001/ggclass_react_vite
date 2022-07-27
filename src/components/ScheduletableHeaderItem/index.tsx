import AddCircleIcon from '@mui/icons-material/AddCircle';
import PropTypes from 'prop-types';

// @ts-ignore
import styles from './styles.module.css';

interface Prop {
    text: string;
    date: string;
    addSchedule: () => void;
}

function ScheduletableHeaderItem({ text, date, addSchedule }: Prop) {
    return (
        <div className={styles.header_item}>
            <h6 className={styles.header_item_top}>{text}</h6>
            <div className={styles.header_item_bottom}>
                <div className={styles.date}>{date}</div>
                <div className={styles.add_icon_wrap}>
                    <div className={styles.add_icon}>
                        <AddCircleIcon onClick={addSchedule} sx={{ fontSize: 21 }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScheduletableHeaderItem;

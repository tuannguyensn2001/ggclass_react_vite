import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DateRangeIcon from '@mui/icons-material/DateRange';

// @ts-ignore
import styles from './styles.module.css';
import { useMemo } from 'react';
import dayjs from '~/packages/dayjs';

const defaultDatas = {
    text: 'Tuần 18/7 - 24-7, 2022',
};

function ScheduleHeader({
    data = defaultDatas,
    currentWeek,
    handleClickNextWeek,
    handleClickPreviousWeek,
    handleClickBackNow,
}: any) {
    const dateToString = useMemo(() => {
        const [start, end] = currentWeek;
        return `${start.format('DD/MM/YYYY')}-${end.format('DD/MM/YYYY')}`;
    }, [currentWeek]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <button className={`${styles.button} ${styles.primary}`}>Tuần</button>
                <button className={`${styles.button}`}>Tháng</button>
            </div>
            <div className={styles.mid}>
                <div className={styles.icon}>
                    <ChevronLeftIcon onClick={handleClickPreviousWeek} sx={{ color: 'rgba(0, 0, 0, 0.54)' }} />
                </div>
                <div className={styles.content}>
                    <div className={styles.day}>{dateToString}</div>

                    <div onClick={handleClickBackNow} className={`${styles.back} ${styles.active}`}>
                        Quay về tuần hiện tại
                    </div>
                </div>
                <div onClick={handleClickNextWeek} className={styles.icon}>
                    <ChevronRightIcon sx={{ color: 'rgba(0, 0, 0, 0.54)' }} />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.action_btn}>
                    <ContentCopyIcon sx={{ fontSize: 20 }} />
                    <span className={styles.text}>Sao chép lịch</span>
                </div>
                <div className={`${styles.action_btn} ${styles.comment}`}>
                    <DateRangeIcon sx={{ fontSize: 20 }} />
                    <span className={styles.text}>Nhận xét</span>
                </div>
            </div>
        </div>
    );
}

export default ScheduleHeader;

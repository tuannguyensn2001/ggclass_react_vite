import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DateRangeIcon from '@mui/icons-material/DateRange';

import styles from './styles.module.css'

const defaultDatas={
    text:'Tuần 18/7 - 24-7, 2022'
}
function ScheduleHeader({data= defaultDatas}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <button className={`${styles.button} ${styles.primary}`}>Tuần</button>
                <button className={`${styles.button}`}>Tháng</button>
            </div>
            <div className={styles.mid}>
                <div className={styles.icon}>
                    <ChevronLeftIcon sx={{color:'rgba(0, 0, 0, 0.54)'}}/>
                </div>
                <div className={styles.content}>
                    <div className={styles.day}>
                        {data.text}
                    </div>
                    <div className={`${styles.back} ${styles.active}`}>
                        Quay về tuần hiện tại
                    </div>
                </div>
                <div className={styles.icon}>
                    <ChevronRightIcon sx={{color:'rgba(0, 0, 0, 0.54)'}}/>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.action_btn}>
                    <ContentCopyIcon sx={{fontSize : 20}}/>
                    <span className={styles.text}>Sao chép lịch</span>
                </div>
                <div className={`${styles.action_btn} ${styles.comment}`}>
                    <DateRangeIcon sx={{fontSize : 20}}/>
                    <span className={styles.text}>Nhận xét</span>
                </div>
            </div>
        </div>
    );
}

export default ScheduleHeader;
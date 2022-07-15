import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useRef } from 'react';
import styles from './styles.module.css'

function ScheduletableHeaderItem({data}) {


    
    return (
                <div className={styles.header_item}>
                    <h6 className={styles.header_item_top}>{data.text}</h6>
                    <div className={styles.header_item_bottom}>
                        <div className={styles.date}>
                            {data.date}
                        </div>
                        <div className={styles.add_icon_wrap}>
                            <div className={styles.add_icon}>
                                <AddCircleIcon  sx={{fontSize : 21}}/>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default ScheduletableHeaderItem;
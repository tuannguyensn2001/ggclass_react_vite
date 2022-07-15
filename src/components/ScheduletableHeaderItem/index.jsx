import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css'

function ScheduletableHeaderItem({data}) {


    
    return (
                <div className={styles.header_item}>
                    <h6 className={styles.header_item_top}>{data?.text ? data.text :'' }</h6>
                    <div className={styles.header_item_bottom}>
                        <div className={styles.date}>
                            {data?.date ? data.date : ''}
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
ScheduletableHeaderItem.propTypes ={
    data : PropTypes.object
}

export default ScheduletableHeaderItem;
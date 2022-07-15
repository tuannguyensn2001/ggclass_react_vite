import AddCircleIcon from '@mui/icons-material/AddCircle';
import Tippy from "@tippyjs/react/headless";
import { Fragment } from 'react';
import "tippy.js/dist/tippy.css";
import PropTypes from 'prop-types';

import ScheduleDetailclasses from '~/components/ScheduleDetailclasses'


import styles from './styles.module.css'


function ScheduleContentClassesItem({time,name,number}) {
  
   
    return (
            <div className={styles.wrap}>
                <div className={styles.classes}>
                    <div className={styles.header}>
                        <img src='https://shub.edu.vn/images/icons/schedule_offline.svg' alt='class' className={styles.img_class}/>
                        <div className={styles.time}>
                            Bắt đầu: {time}
                        </div>
                    </div>  
                    <div className={styles.text}>
                        {name}
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.img_checkP}>
                            <img src='https://shub.edu.vn/images/icons/user-check-white.svg' alt='check people'/>
                        </div>
                        <div className={styles.bottom_text}>
                            Điểm danh: {number}
                        </div>
                    </div>
                </div>
            </div>
    );
    }
    ScheduleContentClassesItem.propTypes = {
        time: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
        
    }

export default ScheduleContentClassesItem;
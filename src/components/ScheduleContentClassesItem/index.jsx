import AddCircleIcon from '@mui/icons-material/AddCircle';
import Tippy from "@tippyjs/react/headless";
import { Fragment } from 'react';
import "tippy.js/dist/tippy.css";
import PropTypes from 'prop-types';

import ScheduleDetailclasses from '~/components/ScheduleDetailclasses'


import styles from './styles.module.css'


function ScheduleContentClassesItem({data}) {
  
   
    return (
            <div className={styles.wrap}>
                <div className={styles.classes}>
                    <div className={styles.header}>
                        <img src='https://shub.edu.vn/images/icons/schedule_offline.svg' alt='class' className={styles.img_class}/>
                        <div className={styles.time}>
                            Bắt đầu: {data?.time ? data.time : ''}
                        </div>
                    </div>  
                    <div className={styles.text}>
                        {data?.name ? data.name : ''}
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.img_checkP}>
                            <img src='https://shub.edu.vn/images/icons/user-check-white.svg' alt='check people'/>
                        </div>
                        <div className={styles.bottom_text}>
                            Điểm danh: {data?.number ? data.number : ''}
                        </div>
                    </div>
                </div>
            </div>
    );
    }
    ScheduleContentClassesItem.propTypes = {
        data: PropTypes.object
    }

export default ScheduleContentClassesItem;
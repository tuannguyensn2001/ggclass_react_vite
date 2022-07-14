import AddCircleIcon from '@mui/icons-material/AddCircle';
import Tippy from "@tippyjs/react/headless";
import { Fragment } from 'react';
import "tippy.js/dist/tippy.css";

import ScheduleDetailclasses from '~/components/ScheduleDetailclasses'


import styles from './styles.module.css'
const defaultDatas = {
            time: '7:00',
                name: 'Học lập trình',
                number: '9/9'
} ;


function ScheduleContentClassesItem({data}) {
    console.log('data chid')
    if(!data || data.length === 0){
        return <div className={styles.noClasses}>Không có lịch học</div>
    }
   
    return (
        <Fragment>
            {data.map((item,index)=>
            <Tippy
            interactive
            placement="right-start"
            offset={[0,0]}
            render={() => <ScheduleDetailclasses data={item} />}
          >
             <div className={styles.wrap}>
                    <div className={styles.classes}>
                        <div className={styles.header}>
                            <img src='https://shub.edu.vn/images/icons/schedule_offline.svg' alt='class' className={styles.img_class}/>
                            <div className={styles.time}>
                                Bắt đầu: {item.time}
                            </div>
                        </div>  
                        <div className={styles.text}>
                            {item.name}
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.img_checkP}>
                                <img src='https://shub.edu.vn/images/icons/user-check-white.svg' alt='check people'/>
                            </div>
                            <div className={styles.bottom_text}>
                                Điểm danh: {item.number}
                            </div>
                        </div>
                    </div>
                </div>
          </Tippy>
            )}
        
        </Fragment>
    );
    }
        

export default ScheduleContentClassesItem;
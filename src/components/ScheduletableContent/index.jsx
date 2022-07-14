import AddCircleIcon from '@mui/icons-material/AddCircle';


import ScheduleContentClassesItem from '~/components/ScheduleContentClassesItem'
import ScheduleAddModal from '~/components/ScheduleAddModal'
import styles from './styles.module.css'

function ScheduletableContent({data}) {
    console.log('data', data)
    return (
       <div className={styles.col_wrap}>
            <div className={styles.col}>
                <div className={styles.header_item}>
                    <h6 className={styles.header_item_top}>{data.text}</h6>
                    <div className={styles.header_item_bottom}>
                        <div className={styles.date}>
                            {data.date}
                        </div>
                        <div className={styles.add_icon_wrap}>
                            <div className={styles.add_icon}>
                            <ScheduleAddModal>
                                <AddCircleIcon sx={{fontSize : 21}}/>
                            </ScheduleAddModal>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <ScheduleContentClassesItem data={data.children} />   
            </div>
       </div>
    );
}

export default ScheduletableContent;
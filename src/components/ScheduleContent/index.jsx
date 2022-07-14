
import { Grid } from '@mui/material';


import ScheduletableContent from '~/components/ScheduletableContent';
import styles from './styles.module.css'

const defaultDatas = [
    {
        text: 'Thứ 2',
        date:'19/7',
        children: [
            {
                time: '7:00',
                name: 'Học lập trình',
                number: '9/9'
            }
        ]
    },
    {
        text: 'Thứ 3',
        date:'19/7',
        children: [
            {
                time: '7:00',
                name: 'Học lập trình',
                number: '9/9'
            }
        ]
    },
    ,{
        text: 'Thứ 4',
        date:'19/7',
        children: [
            {
                time: '7:00',
                name: 'Học lập trình',
                number: '9/9'
            }
        ]
    }
    ,{
        text: 'Thứ 5',
        date:'19/7',
        children: [
            {
                time: '7:00',
                name: 'Học lập trình',
                number: '9/9'
            }
        ]
    }
    ,{
        text: 'Thứ 6',
        date:'19/7',
        children: [
            {
                time: '7:00',
                name: 'Học lập trình',
                number: '9/9'
            }
        ]
    }
    ,{
        text: 'Thứ 7',
        date:'19/7',
        children: [
            {
                time: '7:00',
                name: 'Học lập trình',
                number: '9/9'
            }, {
                time: '7:00',
                name: 'Học lập trình',
                number: '9/9'
            }
            , {
                time: '7:00',
                name: 'Học lập trình',
                number: '9/9'
            },
            {
                time: '7:00',
                name: 'Học lập trình',
                number: '9/9'
            },
            {
                time: '7:00',
                name: 'Học lập trình',
                number: '9/9'
            }
        ]
    }
    ,{
        text: 'Chủ nhật',
        date:'19/7',
        children: [
            
        ]
    }
]
  

function ScheduleContent({datas = defaultDatas}) {
    return (
        <div className={styles.wrapper}>
            <Grid container className={styles.table}>
                {datas.map((data, index) => 
                
                    <ScheduletableContent data={data} />
                )}
            </Grid>
        </div>
    );
}

export default ScheduleContent;
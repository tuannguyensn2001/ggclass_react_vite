import { Grid } from '@mui/material';
import { useMemo, useState } from 'react';

// @ts-ignore
import styles from './styles.module.css';
import ScheduleColTable from '~/components/ScheduleColTable';
import ScheduleHeader from '~/components/ScheduleHeader';
import useWeek from '~/hooks/useWeek';

const dates = [
    {
        text: 'Thứ 2',
        date: '19/7',
        children: [
            {
                time: '7:00',
                name: 'Học lập trình',
                number: '9/9',
            },
        ],
    },
    {
        text: 'Thứ 3',
        date: '19/7',
        children: [
            {
                time: '7:00',
                name: 'Học lập trình',
                number: '9/9',
            },
        ],
    },
    ,
    {
        text: 'Thứ 4',
        date: '19/7',
        children: [
            {
                time: '7:00',
                name: 'Học lập trình',
                number: '9/9',
            },
        ],
    },
    {
        text: 'Thứ 5',
        date: '19/7',
        children: [
            {
                time: '7:00',
                name: 'Học lập trình',
                number: '9/9',
            },
        ],
    },
    {
        text: 'Thứ 6',
        date: '19/7',
        children: [
            {
                time: '7:00',
                name: 'Học lập trình',
                number: '9/9',
            },
        ],
    },
    {
        text: 'Thứ 7',
        date: '19/7',
        children: [
            {
                time: '7:00',
                name: 'Học lập trình',
                number: '9/9',
            },
            {
                time: '7:00',
                name: 'Học lập trình',
                number: '9/9',
            },
            {
                time: '7:00',
                name: 'Học lập trình',
                number: '9/9',
            },
            {
                time: '7:00',
                name: 'Học lập trình',
                number: '9/9',
            },
            {
                time: '7:00',
                name: 'Học lập trình',
                number: '9/9',
            },
        ],
    },
    {
        text: 'Chủ nhật',
        date: '19/7',
    },
];

function Schedule() {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleOpenModal = () => {
        setIsOpenModal(true);
    };

    const { week, increaseWeek, decreaseWeek, backToNow, currentWeek } = useWeek();

    const dates = useMemo(() => {
        const [start] = currentWeek;
        const result = [
            {
                date: start.format('DD/MM'),
            },
        ];
        for (let i = 1; i <= 6; i++) {
            result.push({
                date: start.add(i, 'day').format('DD/MM'),
            });
        }
        return result;
    }, [currentWeek]);
    return (
        <div className={styles.wrap}>
            <ScheduleHeader
                handleClickBackNow={backToNow}
                handleClickPreviousWeek={decreaseWeek}
                handleClickNextWeek={increaseWeek}
                currentWeek={currentWeek}
            />
            <Grid container>
                {dates?.map((item, index) => {
                    return <ScheduleColTable addSchedule={handleOpenModal} key={index} item={item} />;
                })}
            </Grid>
        </div>
    );
}

export default Schedule;

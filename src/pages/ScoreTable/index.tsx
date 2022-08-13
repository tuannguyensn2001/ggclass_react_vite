// @ts-ignore
import styles from './styles.module.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import useGetExerciseInClass from '~/hooks/useGetExercisesInClass';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getScoreInClass } from '~/repositories/assignment';

function ScoreTable() {
    const { data } = useGetExerciseInClass();

    const { id } = useParams();
    const { data: scores } = useQuery(['scores', id], () => getScoreInClass(Number(id)));

    console.log(scores);

    return (
        <div className={styles.wrap}>
            <div className={styles.header}>Bảng điểm</div>
            <div className={styles.content}>
                {/*<div className={styles.table}>*/}
                {/*    <ScoreTableHeader />*/}
                {/*    <ScoreTableContentHeader />*/}
                {/*    <div className={styles.listStudent}>*/}
                {/*        <ScoreTableContentItem />*/}
                {/*    </div>*/}
                {/*</div>*/}
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className={'tw-bg-gray-200'}>
                            <TableRow>
                                <TableCell width={200}> Ho va ten</TableCell>
                                <TableCell width={200}>Trung binh</TableCell>
                                {data?.map((item) => (
                                    <TableCell key={item.id}>{item.name}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {scores?.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell component={'th'} scope={'row'}>
                                        <div className={'tw-flex'}>
                                            <div>
                                                <img
                                                    src={item.avatar}
                                                    className={
                                                        'tw-w-8 tw-h-8 tw-rounded-full tw-mt-1'
                                                    }
                                                    alt=""
                                                />
                                            </div>
                                            <div
                                                className={
                                                    'tw-flex tw-flex-col tw-justify-center tw-ml-2 tw-font-bold'
                                                }
                                            >
                                                {item.name}
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>{item.average}</TableCell>
                                    {item.scores.map((score) => (
                                        <TableCell key={score.id}>{score.mark}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default ScoreTable;

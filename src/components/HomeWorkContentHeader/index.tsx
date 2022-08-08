import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import SelectMaterial from '~/components/SelectMaterial/index';

// @ts-ignore
import styles from './styles.module.css';

function HomeWorkContentHeader() {
    return (
        <div className={styles.wrap}>
            <div className={styles.search}>
                <TextField fullWidth size={'medium'} variant="outlined" />

                <div className={styles.select}>
                    <SelectMaterial
                        // value={field.value}
                        // onChange={field.onChange}
                        label={'Sap xep'}
                        // className={styles.select111}
                        options={[
                            {
                                value: 'default',
                                text: 'sap xep',
                            },
                            {
                                value: 'A-Z',
                                text: 'A-Z',
                            },
                            {
                                value: 'Z-A',
                                text: 'Z-A',
                            },
                            {
                                value: 'time_asc',
                                text: 'Moi nhat',
                            },
                            {
                                value: 'time_desc',
                                text: 'Cu nhat',
                            },
                        ]}
                    />
                </div>
            </div>
            <div className={'tw-ml-2'}>
                <Link to="add" className={styles.link}>
                    <Button variant={'contained'}>Tạo bài tập</Button>
                </Link>
            </div>
        </div>
    );
}

export default HomeWorkContentHeader;

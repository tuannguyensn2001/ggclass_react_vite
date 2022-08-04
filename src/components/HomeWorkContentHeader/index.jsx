import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import SelectMaterial from '~/components/SelectMaterial/index';

import styles from './styles.module.css';

function HomeWorkContentHeader() {
    return (
        <div className={styles.wrap}>
            <div className={styles.search}>
                <TextField
                    style={{
                        width: '100%',
                    }}
                    InputProps={{
                        style: {
                            height: 38,
                            border: 'none',
                        },
                    }}
                    variant="outlined"
                />

                <div className={styles.select}>
                    <SelectMaterial
                        // value={field.value}
                        // onChange={field.onChange}
                        label={'Sap xep'}
                        className={styles.select111}
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
            <Link to="add" className={styles.link}>
                <Button className={styles.button}>Tạo bài tập</Button>
            </Link>
        </div>
    );
}

export default HomeWorkContentHeader;

import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

import styles from './styles.module.css';

function LesssonContentHeader() {
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
                <div className={styles.icon}>
                    <SearchIcon />
                </div>
            </div>
            <Button className={styles.button}>Tạo bài giảng</Button>
        </div>
    );
}

export default LesssonContentHeader;

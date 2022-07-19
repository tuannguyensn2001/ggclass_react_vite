import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import { memo } from 'react';
import TextField from '@mui/material/TextField';

import styles from './styles.module.css';

function ClassContentHeader({ handleOpenAddModal }) {
    return (
        <div className={styles.wrap}>
            <div className={styles.left}>
                <TextField
                     fullWidth 
                    type="text"
                    inputProps={{className:`${styles.input}`}}
                    id="fullWidth"
                    // className={styles.input}
                    placeholder="Nhập để tìm kiếm..."
                    // sx={{height:50}}
                />
            </div>
            <div className={styles.mid}>
                <div className={styles.text}>Mới nhất</div>
                <div className={styles.icon}>
                    <ArrowDropDownIcon sx={{ color: 'rgb(87, 86, 86)' }} />
                </div>
            </div>
            <div className={styles.button} onClick={handleOpenAddModal}>
                <div className={styles.plush}>
                    <AddIcon sx={{ color: '#fff' }} />
                </div>
                <div className={styles.info}>Tạo lớp học</div>
            </div>
        </div>
    );
}
// ClassContentHeader.propTypes = {
//   handleOpenAddModal: PropTypes.func
// }
export default memo(ClassContentHeader);

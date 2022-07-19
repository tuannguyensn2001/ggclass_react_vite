import clsx from 'clsx';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import styles from './styles.module.css';
import { memo } from 'react';

function ClassHeader() {
    return (
        <div className={styles.wrap}>
            <div className={styles.left}>
                <button className={clsx(styles.button, styles.active)}>
                    Lớp của bạn
                </button>
                <button className={styles.button}>Lớp đã ẩn</button>
            </div>
            <div className={styles.right}>
                <div className={styles.bin}>
                    <DeleteOutlineIcon
                        sx={{ fontSize: 16, color: 'rgb(78, 82, 94);' }}
                    />
                </div>
                <div className={styles.text}>Thùng rác</div>
            </div>
        </div>
    );
}

// ClassHeader.propTypes = {
//   handleOpenAddModal: PropTypes.func
// }
export default memo(ClassHeader);

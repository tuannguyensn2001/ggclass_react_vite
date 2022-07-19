import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import { memo } from 'react';

import styles from './styles.module.css';

function ClassContentHeader({ handleOpenAddModal }) {
    return (
        <div className={styles.wrap}>
            <div className={styles.left}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Nhập để tìm kiếm"
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

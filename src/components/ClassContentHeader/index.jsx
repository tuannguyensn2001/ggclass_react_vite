import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import { memo } from 'react';
import TextField from '@mui/material/TextField';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import clsx from 'clsx';
import styles from './styles.module.css';

function ClassContentHeader({ nameSort, handleOpenAddModal, handleChangeSearch, handleClickSort, handleSortAToZ }) {
    return (
        <div className={styles.wrap}>
            <div className={styles.left}>
                <TextField
                    fullWidth
                    type="text"
                    inputProps={{ className: `${styles.input}` }}
                    id="fullWidth"
                    onChange={handleChangeSearch}
                    placeholder="Nhập để tìm kiếm..."
                />
            </div>
            <Tippy
                interactive
                trigger="click"
                hideOnClick={true}
                offset
                placement="top-start"
                render={() => (
                    <div className={styles.sort}>
                        <div value={0} onClick={handleSortAToZ} className={styles.sortItem}>
                            Từ a-z
                        </div>
                        <div value={1} onClick={handleClickSort} className={styles.sortItem}>
                            Từ z-a
                        </div>
                        <div value={2} onClick={handleClickSort} className={styles.sortItem}>
                            Mới nhất
                        </div>
                        <div value={3} onClick={handleClickSort} className={clsx(styles.sortItem, styles.active)}>
                            Cũ nhất
                        </div>
                    </div>
                )}
            >
                <div className={styles.mid}>
                    <div className={styles.text}>{nameSort}</div>
                    <div className={styles.icon}>
                        <ArrowDropDownIcon sx={{ color: 'rgb(87, 86, 86)' }} />
                    </div>
                </div>
            </Tippy>

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

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SearchIcon from '@mui/icons-material/Search';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import PropTypes from 'prop-types'

import styles from './styles.module.css'

function MemberTableHeader({handleOpenAddModal = ()=>{}}) {
    return (
        <div className={styles.table}>
          <div className={styles.table_header}>
            <div className={styles.table_header_left} onClick={handleOpenAddModal}>
                <div className={styles.table_header_left_icon}>
                  <GroupAddIcon sx={{fontSize:16}}/>
                </div>
                <div className={styles.table_header_left_text}>
                  Thêm học sinh
                </div>
            </div>
            <div className={styles.table_header_mid}>
              <input type="text" placeholder="Nhập và nhấn enter để tìm kiếm" className={styles.table_header_mid_input}/>
              <div className={styles.table_header_mid_button}>
                <SearchIcon sx={{fontSize:20}}/>
              <div className={styles.table_header_mid_text}>Tìm kiếm</div>
              </div>
            </div>
            <div className={styles.table_header_right}>
              <div className={styles.table_header_right_icon}>
                  <LocalPrintshopIcon />
              </div>
            </div>
          </div>
        </div>
    );
}
MemberTableHeader.propTypes = {
  handleOpenAddModal: PropTypes.func
} 
export default MemberTableHeader;
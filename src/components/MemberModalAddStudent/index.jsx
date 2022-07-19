
import styles from './styles.module.css'

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import clsx from 'clsx';
import PropTypes from 'prop-types'

 function MemberModalAddStudent({openAddModal=false,handleCloseAddModal=()=>{}}) {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Modal
        open={openAddModal}
        // onClose={handleCloseAddModal}  
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={styles.box}>
          <div className={styles.header}>
            <div className={styles.header_text}>Thêm học sinh vào lớp</div>
            <div className={styles.close}>
                <CloseIcon onClick={handleCloseAddModal}  sx={{fontSize:21,margin:'auto',color:'rgba(0, 0, 0, 0.54)'}}/>
            </div>
          </div>
          <div className={styles.text}>Học sinh được giáo viên thêm vào lớp sẽ không cần nhập mã bảo vệ và phê duyệt</div>
          <div className={styles.content}>
            <TextField className={styles.input}  id="outlined-basic" label="Số điện thoại đăng nhập của học sinh" variant="outlined" />
            <div className={styles.or}>Hoặc</div>
            <TextField className={styles.input} id="outlined-basic" label="ID học sinh từ sở giáo dục" variant="outlined" />
          </div>
          <div className={styles.footer}>
            <button className={clsx(styles.submit,{[styles.active]:true})}>Tìm kiếm</button>
            <div className={styles.excel}>Thêm học sinh bằng file Excel</div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
MemberModalAddStudent.propTypes = {
  openAddModal:PropTypes.bool,
  handleCloseAddModal:PropTypes.func,
}
export default MemberModalAddStudent

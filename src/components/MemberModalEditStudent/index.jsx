
import styles from './styles.module.css'

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import clsx from 'clsx';
import PropTypes from 'prop-types'


 function MemberModalEditStudent({isOpenModalEdit=false,handleCloseModalEdit=()=>{}}) {
 

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 444,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Modal
        open={isOpenModalEdit}
        onClose={handleCloseModalEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={styles.box}>
          <div className={styles.header}>
            <div className={styles.header_text}>Đặt tên gợi nhớ</div>
          </div>
          <div className={styles.content}>
            <TextField className={styles.input}  id="outlined-basic" label="Tên gợi nhớ" variant="outlined" />
          </div>
          <div className={styles.footer}>
            <button className={clsx(styles.button,styles.cancel)}>Hủy</button>
            <button className={clsx(styles.button,{[styles.active]:true})}>Tìm kiếm</button>
            
          </div>
        </Box>
      </Modal>
    </div>
  );
}
MemberModalEditStudent.propTypes = {
  isOpenModalEdit:PropTypes.bool,
  handleCloseModalEdit:PropTypes.func,
}
export default MemberModalEditStudent
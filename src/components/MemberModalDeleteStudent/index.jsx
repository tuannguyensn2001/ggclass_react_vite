
import styles from './styles.module.css'

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import clsx from 'clsx';
import PropTypes from 'prop-types'


 function MemberModalDeleteStudent({isOpenModalDelete=false,handleCloseModalDelete=()=>{}}) {
  

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
        open={isOpenModalDelete}
        onClose={handleCloseModalDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={styles.box}>
          <div className={styles.header}>
            <div className={styles.header_text}>Xóa học sinh </div>
          </div>
          <div className={styles.content}>
            Học sinh hoang xuan quy sẽ bị xóa khỏi danh sách lớp!
          </div>
          <div className={styles.footer}>
            <button className={clsx(styles.button,styles.cancel)}>Thoát</button>
            <button className={clsx(styles.button,{[styles.active]:true})}>Đồng ý</button>
            
          </div>
        </Box>
      </Modal>
    </div>
  );
}
MemberModalDeleteStudent.propTypes = {
  isOpenModalDelete:PropTypes.bool,
  handleCloseModalDelete:PropTypes.func,
}
export default MemberModalDeleteStudent

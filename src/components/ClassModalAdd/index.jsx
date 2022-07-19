
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
import { useForm } from "react-hook-form";
import API from "~/network/API";


 function ClassModalAdd({openAddModal=false,handleCloseAddModal=()=>{},subMitForm}) {


  const {
    register,
    handleSubmit,
    reset 
  } = useForm();
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
  

 
  const submit =(data) => {
    console.log('data',register('name').name)
      reset({
        name:'',
        description:'',
    })
    handleCloseAddModal();
    subMitForm(data);
  }
  return (
    <div>
      <Modal
        open={openAddModal}
        onClose={handleCloseAddModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={styles.box} component="form"  noValidate onSubmit={handleSubmit(submit)}>
          <div className={styles.header}>
            <div className={styles.header_text}>Thêm lớp học mới</div>
            <div className={styles.close}>
                <CloseIcon onClick={handleCloseAddModal}  sx={{fontSize:21,margin:'auto',color:'rgba(0, 0, 0, 0.54)'}}/>
            </div>
          </div>
          <div className={styles.content}>
            <TextField {...register('name')} name="name"  className={styles.input}  id="outlined-basic" label="Tên lớp học" variant="outlined" />
            <TextField {...register('description')} name="description" className={styles.input} id="outlined-basic" label="Mô tả" variant="outlined" />
          </div>
          <div className={styles.footer}>
            <Button type="submit" className={clsx(styles.submit,{[styles.active]:true})}>Thêm</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
ClassModalAdd.propTypes = {
  openAddModal:PropTypes.bool,
  handleCloseAddModal:PropTypes.func,
  subMitForm:PropTypes.func,
}
export default ClassModalAdd

import styles from './styles.module.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function ClassModalJoin({ openJoinModal = false, handleCloseJoinModal = () => {}, subMitForm }) {
    const { register, handleSubmit, reset } = useForm({ shouldUseNativeValidation: true });
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

    const submit = (data) => {
        const code = data.code.trim();

        reset({
            code: '',
        });

        handleCloseJoinModal();
        subMitForm(data);
    };
    return (
        <div>
            <Modal
                open={openJoinModal}
                onClose={handleCloseJoinModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className={styles.box} component="form" noValidate onSubmit={handleSubmit(submit)}>
                    <div className={styles.header}>
                        <div className={styles.header_text}>Tham gia lớp học</div>
                        <div className={styles.close}>
                            <CloseIcon
                                onClick={handleCloseJoinModal}
                                sx={{ fontSize: 21, margin: 'auto', color: 'rgba(0, 0, 0, 0.54)' }}
                            />
                        </div>
                    </div>
                    <div className={styles.content}>
                        <TextField
                            {...register('code', { required: 'Please enter  classes code.' })}
                            name="code"
                            className={styles.input}
                            id="outlined-basic"
                            label="Nhập code lớp học"
                            variant="outlined"
                        />
                    </div>
                    <div className={styles.footer}>
                        <Button type="submit" className={clsx(styles.submit, { [styles.active]: true })}>
                            Gửi yêu cầu tham gia lớp
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
ClassModalJoin.propTypes = {
    openAddModal: PropTypes.bool,
    handleCloseAddModal: PropTypes.func,
    subMitForm: PropTypes.func,
};
export default ClassModalJoin;

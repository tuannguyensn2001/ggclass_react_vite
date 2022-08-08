import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CreateNotificationInClassRequest } from '~/types/notification';

interface Prop {
    open: boolean;
    handleClose: () => void;
    handleCreate: (content: string) => void;
}
type Data = {
    name: string;
};

function ModalAddFolder({ open, handleClose, handleCreate }: Prop) {
    const { control, handleSubmit, register, resetField } = useForm<Data>();

    const submit = (data: Data) => {
        resetField('name');
        handleCreate(data.name);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <DialogContentText sx={{ width: 400 }}>Tạo thư mục mới</DialogContentText>
                    <div className={'tw-mt-5'}>
                        <TextField
                            required
                            {...register('name')}
                            autoFocus
                            label="Tên thư mục"
                            fullWidth
                            variant="outlined"
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Hủy</Button>
                    <Button variant={'contained'} onClick={handleSubmit(submit)}>
                        Tạo
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ModalAddFolder;

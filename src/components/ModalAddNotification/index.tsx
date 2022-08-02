import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';
import { CreateNotificationInClassRequest } from '~/types/notification';

interface Prop {
    open: boolean;
    handleClose: () => void;
    handleCreate: (content: string) => void;
}

function ModalAddNotification({ open, handleClose, handleCreate }: Prop) {
    const { control, handleSubmit, register, resetField } = useForm<Pick<CreateNotificationInClassRequest, 'content'>>({
        defaultValues: {
            content: '',
        },
    });

    const submit = (data: Pick<CreateNotificationInClassRequest, 'content'>) => {
        resetField('content');
        handleCreate(data.content);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <DialogContentText>Thong bao se duoc gui den cac thanh vien trong lop</DialogContentText>
                    <div className={'tw-mt-5'}>
                        <TextField
                            required
                            {...register('content')}
                            autoFocus
                            label="Noi dung"
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

export default ModalAddNotification;

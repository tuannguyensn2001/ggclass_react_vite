import TextField from '@mui/material/TextField';

function FormMultipleChoice() {
    return (
        <div className={'tw-mt-4 tw-flex'}>
            <div>
                <TextField label={'So cau'} />
            </div>
            <div className={'tw-ml-5'}>
                <TextField label={'Tong diem'} />
            </div>
        </div>
    );
}

export default FormMultipleChoice;

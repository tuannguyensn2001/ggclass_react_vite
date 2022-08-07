import Button from '@mui/material/Button';

interface Prop {
    handleNext: () => void;
    handlePrevious: () => void;
    handleComplete: () => void;
    showComplete: boolean;
}

function HeaderHomework({ handleNext, handlePrevious, handleComplete, showComplete }: Prop) {
    return (
        <div className={'tw-h-[60px] tw-shadow'}>
            <div className={'tw-flex tw-justify-between tw-h-full'}>
                <div>abc</div>
                <div className={'tw-flex tw-justify-center tw-flex-col '}>
                    <div className={'tw-flex'}>
                        <div className={'tw-mr-4'}>
                            <Button onClick={handlePrevious} variant={'outlined'}>
                                Quay lai
                            </Button>
                        </div>
                        {!showComplete && (
                            <Button onClick={handleNext} variant={'contained'}>
                                Tiep tuc
                            </Button>
                        )}
                        {showComplete && (
                            <Button onClick={handleComplete} variant={'contained'}>
                                Hoan tat
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderHomework;

import Button from '@mui/material/Button';
import CustomSeparator from '~/components/Breadcrumbs';
import styles from './styles.module.css';
interface Prop {
    handleNext: () => void;
    handlePrevious: () => void;
    handleComplete: () => void;
    showComplete: boolean;
}

function HeaderHomework({ handleNext, handlePrevious, handleComplete, showComplete }: Prop) {
    return (
        <div className={styles.wrap}>
            <div className={'tw-h-[60px]'}>
                <div className={'tw-flex tw-justify-between tw-items-center tw-h-full'}>
                    <CustomSeparator />
                    <div className={'tw-flex tw-justify-center tw-flex-col '}>
                        <div className={'tw-flex'}>
                            <div className={'tw-mr-4'}>
                                <Button onClick={handlePrevious} variant={'outlined'}>
                                    Quay lại
                                </Button>
                            </div>
                            {!showComplete && (
                                <Button onClick={handleNext} variant={'contained'}>
                                    Tiếp tục
                                </Button>
                            )}
                            {showComplete && (
                                <Button onClick={handleComplete} variant={'contained'}>
                                    Hoàn tất
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderHomework;

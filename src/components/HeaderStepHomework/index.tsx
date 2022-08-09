import HomeworkStepItem from '~/components/HomeworkStepItem';
import { memo } from 'react';
interface Prop {
    step: number;
}
import styles from './styles.module.css';
function HeaderStepHomework({ step }: Prop) {
    return (
        <div className={styles.wrap}>
            <div className={'tw-grid tw-grid-cols-12'}>
                <HomeworkStepItem active={step === 1} label={'1. Đáp án'} />
                <HomeworkStepItem active={step === 2} label={'2. Mở rộng'} />
                <HomeworkStepItem active={step === 3} label={'3. Thông tin bài tập'} />
            </div>
        </div>
    );
}

export default memo(HeaderStepHomework);

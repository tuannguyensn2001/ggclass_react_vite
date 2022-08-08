import HomeworkStepItem from '~/components/HomeworkStepItem';
import { memo } from 'react';

interface Prop {
    step: number;
}

function HeaderStepHomework({ step }: Prop) {
    return (
        <div className={'tw-grid tw-grid-cols-12'}>
            <HomeworkStepItem active={step === 1} label={'1. Dap an'} />
            <HomeworkStepItem active={step === 2} label={'2. Mo rong'} />
            <HomeworkStepItem active={step === 3} label={'3. Thong tin bai tap'} />
        </div>
    );
}

export default memo(HeaderStepHomework);

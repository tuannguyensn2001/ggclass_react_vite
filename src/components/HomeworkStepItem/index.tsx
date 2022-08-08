import clsx from 'clsx';
import { memo } from 'react';

interface Prop {
    active: boolean;
    label: string;
}

function HomeworkStepItem({ active, label }: Prop) {
    return (
        <div
            className={clsx({
                'tw-col-span-4  tw-py-3 tw-text-center': true,
                'tw-bg-blue-500 tw-text-white': active,
            })}
        >
            {label}
        </div>
    );
}

export default memo(HomeworkStepItem);

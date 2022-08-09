import PreviewFileMultipleChoice from '~/components/PreviewFileMultipleChoice';

function TestMultipleChoice() {
    return (
        <div className={'tw-grid tw-grid-cols-12 tw-h-screen'}>
            <div className={'tw-col-span-7'}>
                <PreviewFileMultipleChoice isFullScreen />
            </div>
            <div className="tw-col-span-5">
                <div className={'tw-bg-blue-500'}>
                    <div>THoi gian con lai</div>
                </div>
            </div>
        </div>
    );
}

export default TestMultipleChoice;

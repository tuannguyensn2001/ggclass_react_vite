import { memo } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
// @ts-ignore
import styles from './style.module.scss';
// @ts-ignore
import pdf from '~/assets/shub_sample_pdf.pdf';
import clsx from 'clsx';

interface Prop {
    isFullScreen?: boolean;
}

function PreviewFileMultipleChoice({ isFullScreen = false }: Prop) {
    return (
        <div className={clsx({ [styles.wrapper]: !isFullScreen, 'tw-h-screen tw-w-full': isFullScreen })}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                <Viewer fileUrl={pdf} />
            </Worker>
        </div>
    );
}

export default memo(PreviewFileMultipleChoice);

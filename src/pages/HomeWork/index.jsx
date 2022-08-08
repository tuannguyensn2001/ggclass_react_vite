import SidebarLeftHomeWork from '~/components/SidebarLeftHomeWork';
import HomeWorkContent from '~/components/HomeWorkContent';
import SiderbarRightHomeWork from '~/components/SiderbarRightHomeWork';
import LessonHeader from '~/components/LessonHeader';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

import styles from './styles.module.css';
const defaultData = [
    {
        name: 'Sinh',
        style: 'Trắc nghiệm',
        type: 'pdf',
        value: '0/0 đã làm',
    },
];
function HomeWork() {
    return (
        <div className={styles.wrap}>
            {/* <LessonHeader name="Bài tập" />
            <div className={styles.content}>
                <SidebarLeftHomeWork />
                <HomeWorkContent data={defaultData} />
                <SiderbarRightHomeWork />
            </div> */}
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                <Viewer fileUrl="http://truongthptductho.edu.vn/upload/48852/20190504/Vi_tich_phan_va_cam_ung_dien_tu.pdf" />
                ;
            </Worker>
        </div>
    );
}

export default HomeWork;

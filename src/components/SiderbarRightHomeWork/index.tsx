import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MouseIcon from '@mui/icons-material/Mouse';
import { Link } from 'react-router-dom';
// @ts-ignore
import styles from './styles.module.css';
import clsx from 'clsx';
import React from 'react';
import SiderbarRightHomeWorkTitleItem from '~/components/SiderbarRightHomeWorkTitleItem';
import SiderbarRightHomeWorkSettingItem from '~/components/SiderbarRightHomeWorkSettingItem';

function SiderbarRightHomeWork() {
    return (
        <div className={styles.wrap}>
            <div className={styles.top}>
                <h3 className={styles.header_top}>Sinh</h3>
                <div className={styles.share}></div>
                <div className={styles.top_content}>
                    <SiderbarRightHomeWorkTitleItem name="Số lần làm bài" value="1" />
                    <SiderbarRightHomeWorkTitleItem name="Lấy điểm" value="Lần đầu tiên" />
                    <SiderbarRightHomeWorkTitleItem name="Ngày tạo" value="3 tháng 8" />
                    <SiderbarRightHomeWorkTitleItem name="Bắt đầu" value="Không có" />
                    <SiderbarRightHomeWorkTitleItem name="Thời lượng" value="Không có" />
                    <SiderbarRightHomeWorkTitleItem name="Đã làm" value="0/0" />
                    <SiderbarRightHomeWorkTitleItem name="Cho phép" value="Chỉ xem điểm" />
                    <SiderbarRightHomeWorkTitleItem name="Hạn chót" value="Không có" />
                </div>
            </div>
            <div className={styles.bottom}>
                <SiderbarRightHomeWorkSettingItem to="" name="Làm thử" Icon={OndemandVideoIcon} />
                <SiderbarRightHomeWorkSettingItem to="alo/edit" name="Chi tiết" Icon={MouseIcon} />
                <SiderbarRightHomeWorkSettingItem to="" name="Di chuyển" Icon={FolderOpenIcon} />
                <SiderbarRightHomeWorkSettingItem to="" name="Chỉnh sửa" Icon={BorderColorIcon} />
                <SiderbarRightHomeWorkSettingItem to="" name="Xóa" Icon={DeleteOutlineIcon} />
            </div>
        </div>
    );
}

export default SiderbarRightHomeWork;

import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MouseIcon from '@mui/icons-material/Mouse';
import { Link, useParams } from 'react-router-dom';
// @ts-ignore
import styles from './styles.module.css';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import SiderbarRightHomeWorkTitleItem from '~/components/SiderbarRightHomeWorkTitleItem';
import SiderbarRightHomeWorkSettingItem from '~/components/SiderbarRightHomeWorkSettingItem';
import useGetExerciseInClass from '~/hooks/useGetExercisesInClass';
import useExercisesInClassStore from '~/store/useExercisesInClassStore';
import dayjs from '~/packages/dayjs';
import { IExercise } from '~/models/IExercise';
import { getTextExerciseMode } from '~/enums/exercise';

function SiderbarRightHomeWork() {
    const { data } = useGetExerciseInClass();
    const id = useExercisesInClassStore((state) => state.id);

    const { id: classId } = useParams();

    const exercise = useMemo<IExercise | undefined>(() => {
        return data?.find((item) => Number(item.id) === Number(id));
    }, [id, data]);

    return (
        <div className={styles.wrap}>
            <div className={styles.top}>
                <h3 className={styles.header_top}>{exercise?.name}</h3>
                <div className={styles.share}></div>
                <div className={styles.top_content}>
                    <SiderbarRightHomeWorkTitleItem
                        name="Số lần làm bài"
                        value={exercise?.numberOfTimeToDo.toString()}
                    />
                    <SiderbarRightHomeWorkTitleItem name="Lấy điểm" value={getTextExerciseMode(exercise?.mode)} />
                    <SiderbarRightHomeWorkTitleItem
                        name="Ngày tạo"
                        value={dayjs(exercise?.createdAt).format('DD/MM/YYYY')}
                    />
                    <SiderbarRightHomeWorkTitleItem
                        name="Bắt đầu"
                        value={exercise?.timeStart ? dayjs(exercise?.timeStart).format('HH:mm DD/MM/YYYY') : 'Khong co'}
                    />
                    <SiderbarRightHomeWorkTitleItem name="Thời lượng" value={exercise?.timeToDo.toString()} />
                    <SiderbarRightHomeWorkTitleItem name="Đã làm" value="0/0" />
                    <SiderbarRightHomeWorkTitleItem name="Cho phép" value="Chỉ xem điểm" />
                    <SiderbarRightHomeWorkTitleItem name="Hạn chót" value="Không có" />
                </div>
            </div>
            <div className={styles.bottom}>
                <SiderbarRightHomeWorkSettingItem to="" name="Làm thử" Icon={OndemandVideoIcon} />
                <SiderbarRightHomeWorkSettingItem to="alo/edit" name="Chi tiết" Icon={MouseIcon} />
                <SiderbarRightHomeWorkSettingItem to="" name="Di chuyển" Icon={FolderOpenIcon} />
                <SiderbarRightHomeWorkSettingItem
                    to={`/class/${classId}/homework/${exercise?.id}/edit`}
                    name="Chỉnh sửa"
                    Icon={BorderColorIcon}
                />
                <SiderbarRightHomeWorkSettingItem to="" name="Xóa" Icon={DeleteOutlineIcon} />
            </div>
        </div>
    );
}

export default SiderbarRightHomeWork;

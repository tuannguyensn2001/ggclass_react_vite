// @ts-ignore
import styles from './styles.module.css';
import ModalAddNotification from '~/components/ModalAddNotification';
import useModal from '~/hooks/useModal';
import NewFeedNotification from '~/components/NewFeedNotification';
import { useMutation } from 'react-query';
import { getCreateNotificationFromTeacherToClass } from '~/repositories/notification';
import { useParams } from 'react-router-dom';
import PermissionWrapper from '~/components/PermissionWrapper';
import { Role } from '~/enums/role';
import useGetNotificationsInClass from '~/hooks/useGetNotificationsInClass';
import useNewsfeedStore from '~/store/useNewsfeedStore';

function NewsfeedSiderBarRight() {
    const { isOpen, close, open } = useModal();

    const trigger = useNewsfeedStore((state) => state.trigger);

    const { mutate } = useMutation(
        'create',
        ({ classId, content }: { classId: number; content: string }) =>
            getCreateNotificationFromTeacherToClass(classId, content),
        {
            onSuccess() {
                trigger();
                close();
            },
        },
    );

    const { id } = useParams();

    const handleCreate = (content: string) => {
        mutate({
            classId: Number(id),
            content,
        });
    };

    const { data } = useGetNotificationsInClass();

    return (
        <div className={styles.wrap}>
            <ModalAddNotification handleCreate={handleCreate} open={isOpen} handleClose={close} />
            <div className={styles.header}>
                <h4 className={styles.text_header}>Thông báo</h4>
                <PermissionWrapper role={Role.ADMIN}>
                    <button className={styles.button} onClick={open}>
                        + Thêm thông báo
                    </button>
                </PermissionWrapper>
            </div>
            <div className={styles.content}>
                {data?.map((item) => (
                    <NewFeedNotification createdAt={item.createdAt} content={item.content} key={item.id} />
                ))}
                {/* <div className={styles.noNotify}>
                    <span className={styles.dark}>Lớp học chưa có thông báo</span> Nội dung thông báo của giáo viên sẽ
                    xuất hiện ở đây
                </div> */}
            </div>
        </div>
    );
}

export default NewsfeedSiderBarRight;

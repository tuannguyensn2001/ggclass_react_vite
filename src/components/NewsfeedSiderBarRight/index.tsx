// @ts-ignore
import styles from './styles.module.css';
import ModalAddNotification from '~/components/ModalAddNotification';
import useModal from '~/hooks/useModal';
import NewFeedNotification from '~/components/NewFeedNotification';

function NewsfeedSiderBarRight() {
    const { isOpen, close, open } = useModal();

    const handleCreate = (content: string) => {
        console.log(content);
        close();
    };

    return (
        <div className={styles.wrap}>
            <ModalAddNotification handleCreate={handleCreate} open={isOpen} handleClose={close} />
            <div className={styles.header}>
                <h4 className={styles.text_header}>Thông báo</h4>
                <button className={styles.button} onClick={open}>
                    + Thêm thông báo
                </button>
            </div>
            <div className={styles.content}>
                <NewFeedNotification />
                <NewFeedNotification />
                {/* <div className={styles.noNotify}>
                    <span className={styles.dark}>Lớp học chưa có thông báo</span> Nội dung thông báo của giáo viên sẽ
                    xuất hiện ở đây
                </div> */}
            </div>
        </div>
    );
}

export default NewsfeedSiderBarRight;

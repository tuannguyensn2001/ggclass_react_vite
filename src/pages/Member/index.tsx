import styles from './styles.module.css';
import MemberTableHeader from '~/components/MemberTableHeader';
import MemberTableContentHeader from '~/components/MemberTableContentHeader';
import MemberTableContentItem from '~/components/MemberTableContentItem';
import MemberModalAddStudent from '~/components/MemberModalAddStudent';
import MemberModalEditStudent from '~/components/MemberModalEditStudent';
import { useCallback, useMemo, useState } from 'react';
import useModal from '~/hooks/useModal';
import SiderbarRightMemberItem from '~/components/SiderbarRightMemberItem';
import SiderbarRightMember from '~/components/SiderbarRightMember';
import useManageMember from '~/hooks/useManageMember';
import { useConfirm } from 'material-ui-confirm';
import { ConfirmProvider } from 'material-ui-confirm';

function Member() {
    const {
        isOpen: openAddModal,
        open: handleOpenAddModal,
        close: handleCloseAddModal,
    } = useModal();

    const {
        isOpen: isOpenModalEdit,
        open: handleOpenModalEdit,
        close: handleCloseModalEdit,
    } = useModal();

    const {
        listStudent,
        listPendingMember,
        mutateAcceptPending,
        mutateAcceptPendingddStudent,
        mutateDeleteStudent,
        classId,
        mutateAcceptPendingAll,
    } = useManageMember();
    const handleAddStudent = useCallback((data: any) => {
        mutateAcceptPendingddStudent({
            ...data,
            classId: classId,
            role: 2,
        });
    }, []);
    const confirm = useConfirm();
    const handleDelete = (name: any, id: any) => {
        confirm({ title: 'Hãy chắc chắn rằng', description: `Học sinh ${name} sẽ bị xóa.` })
            .then(() =>
                mutateDeleteStudent({
                    classId: classId,
                    userId: id,
                }),
            )
            .catch(() => console.log('Deletion cancelled.'));
    };

    const handleAcceptMember = (userId: any) => {
        mutateAcceptPending({
            classId: classId,
            userId: userId,
        });
    };
    const handleAcceptAll = () => {
        mutateAcceptPendingAll();
    };
    return (
        <div className={styles.wrap}>
            <div className={styles.header}>Thành viên lớp học (1)</div>
            <div className={styles.content}>
                <div className={styles.table}>
                    <MemberTableHeader handleOpenAddModal={handleOpenAddModal} />
                    <MemberTableContentHeader />
                    <ConfirmProvider>
                        <div className={styles.listStudent}>
                            {listStudent?.map((item: any, index: any) => (
                                <MemberTableContentItem
                                    key={item?.id}
                                    avatar={item?.profile?.avatar}
                                    name={item?.username}
                                    classes={item?.classes}
                                    school={item?.school}
                                    phone={item?.phone}
                                    id={item?.id}
                                    handleOpenModalEdit={handleOpenModalEdit}
                                    handleDelete={handleDelete}
                                />
                            ))}
                        </div>
                    </ConfirmProvider>
                    <MemberModalAddStudent
                        handleAddStudent={handleAddStudent}
                        openAddModal={openAddModal}
                        handleCloseAddModal={handleCloseAddModal}
                    />
                    <MemberModalEditStudent
                        handleCloseModalEdit={handleCloseModalEdit}
                        isOpenModalEdit={isOpenModalEdit}
                    />
                </div>
                <SiderbarRightMember
                    handleAcceptAll={handleAcceptAll}
                    data={listPendingMember}
                    handleAcceptMember={handleAcceptMember}
                />
            </div>
        </div>
    );
}

export default Member;

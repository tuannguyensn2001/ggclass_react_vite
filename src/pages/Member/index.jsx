import styles from './styles.module.css';
import MemberTableHeader from '~/components/MemberTableHeader';
import MemberTableContentHeader from '~/components/MemberTableContentHeader';
import MemberTableContentItem from '~/components/MemberTableContentItem';
import MemberModalAddStudent from '~/components/MemberModalAddStudent';
import MemberModalEditStudent from '~/components/MemberModalEditStudent';
import MemberModalDeleteStudent from '~/components/MemberModalDeleteStudent';
import { useCallback, useMemo, useState } from 'react';
import useModal from '~/hooks/useModal';
import useModalDelete from '~/hooks/useModalDelete';
import SiderbarRightMemberItem from '~/components/SiderbarRightMemberItem';
import SiderbarRightMember from '~/components/SiderbarRightMember';
import useManageMember from '~/hooks/useManageMember';

function Member() {
    const { isOpen: openAddModal, open: handleOpenAddModal, close: handleCloseAddModal } = useModal();

    const { isOpen: isOpenModalEdit, open: handleOpenModalEdit, close: handleCloseModalEdit } = useModal();

    const {
        isOpen: isOpenModalDelete,
        nameDelete,
        open: handleOpenModalDelete,
        close: handleCloseModalDelete,
        userIdDelete,
    } = useModalDelete();
    const { listStudent, listPendingMember, mutateA, mutateS, mutateD, classId } = useManageMember(userIdDelete);
    const handleAddStudent = useCallback((data) => {
        mutateS({
            ...data,
            classId: classId,
            role: 2,
        });
    }, []);
    const handleDeleteUser = useCallback(() => {
        handleCloseModalDelete();
        mutateD({
            classId: classId,
            userId: userIdDelete,
        });
    }, [userIdDelete]);

    const handleAcceptMember = (userId) => {
        mutateA({
            classId: classId,
            userId: userId,
        });
        console.log('usrId', userId);
    };
    const handleAcceptAll = () => {
        listPendingMember.forEach((member) => {
            mutateA({
                classId: classId,
                userId: member.id,
            });
        });
    };
    return (
        <div className={styles.wrap}>
            <div className={styles.header}>Thành viên lớp học (1)</div>
            <div className={styles.content}>
                <div className={styles.table}>
                    <MemberTableHeader handleOpenAddModal={handleOpenAddModal} />
                    <MemberTableContentHeader />
                    <div className={styles.listStudent}>
                        {listStudent?.map((item, index) => (
                            <MemberTableContentItem
                                key={index}
                                avatar={item?.profile?.avatar}
                                name={item?.username}
                                classes={item?.classes}
                                school={item?.school}
                                phone={item?.phone}
                                id={item?.id}
                                handleOpenModalEdit={handleOpenModalEdit}
                                handleOpenModalDelete={handleOpenModalDelete}
                            />
                        ))}
                    </div>
                    <MemberModalAddStudent
                        handleAddStudent={handleAddStudent}
                        openAddModal={openAddModal}
                        handleCloseAddModal={handleCloseAddModal}
                    />
                    <MemberModalEditStudent
                        handleCloseModalEdit={handleCloseModalEdit}
                        isOpenModalEdit={isOpenModalEdit}
                    />
                    <MemberModalDeleteStudent
                        nameDelete={nameDelete}
                        handleDeleteUser={handleDeleteUser}
                        isOpenModalDelete={isOpenModalDelete}
                        handleCloseModalDelete={handleCloseModalDelete}
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

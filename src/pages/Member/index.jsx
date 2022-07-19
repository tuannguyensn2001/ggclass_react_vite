import styles from './styles.module.css';
import MemberTableHeader from '~/components/MemberTableHeader';
import MemberTableContentHeader from '~/components/MemberTableContentHeader';
import MemberTableContentItem from '~/components/MemberTableContentItem';
import MemberModalAddStudent from '~/components/MemberModalAddStudent';
import MemberModalEditStudent from '~/components/MemberModalEditStudent';
import MemberModalDeleteStudent from '~/components/MemberModalDeleteStudent';
import { useState } from 'react';
import useModal from '~/hooks/useModal';
import SiderbarRightMemberItem from '~/components/SiderbarRightMemberItem';
import SiderbarRightMember from '~/components/SiderbarRightMember';

const data = [
    {
        avatar: '',
        name: 'Võ Mạnh Cường',
        school: 'Đại học xyz',
        classes: '8',
        phone: '096875450',
    },
    {
        avatar: '',
        name: 'Võ Mạnh Cường',
        school: 'Đại học xyz',
        classes: '8',
        phone: '096875450',
    },
    
   
];

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
        isOpen: isOpenModalDelete,
        open: handleOpenModalDelete,
        close: handleCloseModalDelete,
    } = useModal();
    return (
            <div className={styles.wrap}>
                <div className={styles.header}>Thành viên lớp học (1)</div>
               <div className={styles.content}>
                    <div className={styles.table}>
                        <MemberTableHeader handleOpenAddModal={handleOpenAddModal} />
                        <MemberTableContentHeader />
                        <div className={styles.listStudent}>
                            {data.map((item, index) => (
                                <MemberTableContentItem
                                    key={index}
                                    avatar={item?.avatar}
                                    name={item?.name}
                                    classes={item?.classes}
                                    school={item?.school}
                                    phone={item?.phone}
                                    handleOpenModalEdit={handleOpenModalEdit}
                                    handleOpenModalDelete={handleOpenModalDelete}
                                />
                            ))}
                        </div>
                        <MemberModalAddStudent
                            openAddModal={openAddModal}
                            handleCloseAddModal={handleCloseAddModal}
                        />
                        <MemberModalEditStudent
                            handleCloseModalEdit={handleCloseModalEdit}
                            isOpenModalEdit={isOpenModalEdit}
                        />
                        <MemberModalDeleteStudent
                            isOpenModalDelete={isOpenModalDelete}
                            handleCloseModalDelete={handleCloseModalDelete}
                        />
                    </div>
                    <SiderbarRightMember/>
               </div>
            </div>
    );
}

export default Member;

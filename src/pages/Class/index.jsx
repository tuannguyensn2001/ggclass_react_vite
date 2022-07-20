import CardCourse from '~/components/CardCourse';

import styles from './styles.module.css';
import ClassModalAdd from '~/components/ClassModalAdd';
import useModal from '~/hooks/useModal';
import ClassHeader from '~/components/ClassHeader';
import ClassContentHeader from '~/components/ClassContentHeader';
import useManageMyClass from '~/hooks/useManageMyClass';

function Class() {
    const {
        isOpen: openAddModal,
        open: handleOpenAddModal,
        close: handleCloseAddModal,
    } = useModal();

    const { listData, setListData, activeClass, mutate } = useManageMyClass();

    const createClasses = (data) => {
        mutate(data);
    };

    return (
        <div className={styles.wrap}>
            <div className={styles.header}>
                <ClassHeader />
                <ClassContentHeader handleOpenAddModal={handleOpenAddModal} />
            </div>
            <div className={styles.listClasses}>
                {activeClass.map((item,index) => (
                    <CardCourse
                        key={index}
                        id={item?.id}
                        name={item?.name}
                        description={'nice'}
                        imageUrl={
                            'https://upload.wikimedia.org/wikipedia/commons/9/94/Martin_Garrix_Come_Up_Show_cropped.jpg'
                        }
                    />
                ))}
            </div>
            <ClassModalAdd
                subMitForm={createClasses}
                openAddModal={openAddModal}
                handleCloseAddModal={handleCloseAddModal}
            />
        </div>
    );
}

export default Class;

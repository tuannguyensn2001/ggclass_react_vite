import CardCourse from '~/components/CardCourse';
import styles from './styles.module.css';
import ClassModalAdd from '~/components/ClassModalAdd';
import useModal from '~/hooks/useModal';
import ClassHeader from '~/components/ClassHeader';
import ClassContentHeader from '~/components/ClassContentHeader';
import useManageMyClass from '~/hooks/useManageMyClass';
import { FormProvider, useForm } from 'react-hook-form';
import { useEffect } from 'react';

function Class() {
    const {
        isOpen: openAddModal,
        open: handleOpenAddModal,
        close: handleCloseAddModal,
    } = useModal();

    const { listData, setListData, activeClass, mutate, handleSearch } =
        useManageMyClass();

    const createClasses = (data) => {
        mutate(data);
    };

    const methods = useForm({
        defaultValues: {
            sort: 'default',
        },
    });

    useEffect(() => {
        const value = methods.watch('search');
        handleSearch({
            search: value,
            sort: methods.watch('sort'),
        });
    }, [methods.watch('search'), methods.watch('sort')]);

    return (
        <div className={styles.wrap}>
            <div className={styles.header}>
                <ClassHeader />
                <FormProvider {...methods}>
                    <ClassContentHeader
                        handleOpenAddModal={handleOpenAddModal}
                    />
                </FormProvider>
            </div>
            <div className={styles.listClasses}>
                {activeClass.map((item, index) => (
                    <CardCourse
                        key={item?.id}
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

// 0a 1b 2c 3d 4e
// 0a 1c 2b 3d 4e
// [] -> [a,b,c] -> x

import CardCourse from '~/components/CardCourse';

import styles from './styles.module.css';
import ClassModalAdd from '~/components/ClassModalAdd';
import useModal from '~/hooks/useModal';
import ClassHeader from '~/components/ClassHeader';
import ClassContentHeader from '~/components/ClassContentHeader';
import useManageMyClass from '~/hooks/useManageMyClass';
import { useEffect, useState } from 'react';
import useDebounce from '~/hooks/useDebounce';
import imgUrl from '~/assets/images/backgroud_default.png';
import sortAtoZ from '~/config/sortAtoZ';

function Class() {
    const { isOpen: openAddModal, open: handleOpenAddModal, close: handleCloseAddModal } = useModal();
    const [searchValue, setSearchValue] = useState('');
    const [nameSort, setNameSort] = useState('Sắp xếp');
    const { listData, setListData, activeClass, mutate } = useManageMyClass();
    const [listCard, setListCard] = useState();
    const debounced = useDebounce(searchValue.trim(), 500);
    const createClasses = (data) => {
        mutate(data);
    };
    const handleChangeSearch = (e) => {
        setSearchValue(e.target.value);
    };
    useEffect(() => {
        setListCard(activeClass);
    }, [activeClass]);
    useEffect(() => {
        console.log('de', debounced);
        const list = listCard.filter((item) => {
            if (debounced === '') {
                return item;
            } else if (item.name.toLowerCase().includes(debounced.toLowerCase())) {
                return item;
            }
        });

        setListCard(list);
    }, [debounced]);

    const handleClickSort = (e) => {
        console.log('value', e.target.value);
        setNameSort(e.target.innerText);
    };
    const handleSortAToZ = (e) => {
        setNameSort(e.target.innerText);
        setListCard((prev) => {
            return sortAtoZ(prev);
        });
    };
    return (
        <div className={styles.wrap}>
            <div className={styles.header}>
                <ClassHeader />
                <ClassContentHeader
                    handleClickSort={handleClickSort}
                    handleChangeSearch={handleChangeSearch}
                    handleOpenAddModal={handleOpenAddModal}
                    nameSort={nameSort}
                    handleSortAToZ={handleSortAToZ}
                />
            </div>
            <div className={styles.listClasses}>
                {listCard && listCard.length > 0 ? (
                    listCard.map((item, index) => (
                        <CardCourse
                            key={index}
                            id={item?.id}
                            name={item?.name}
                            description={'nice'}
                            imageUrl={
                                'https://upload.wikimedia.org/wikipedia/commons/9/94/Martin_Garrix_Come_Up_Show_cropped.jpg'
                            }
                        />
                    ))
                ) : (
                    <div className={styles.noCard}>
                        <span className={styles.noText}>Không có lớp học</span>
                        <img src={imgUrl} className={styles.image} />
                    </div>
                )}
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

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import { memo } from 'react';
import TextField from '@mui/material/TextField';

// @ts-ignore
import styles from './styles.module.css';
import { useFormContext, Controller } from 'react-hook-form';
import SelectMaterial from '~/components/SelectMaterial/index';
import { SearchClassForm } from '~/types/class';

interface Prop {
    handleOpenAddModal: () => void;
}

function ClassContentHeader({ handleOpenAddModal }: Prop) {
    const { register, control } = useFormContext<SearchClassForm>();

    return (
        <div className={styles.wrap}>
            <div className={styles.left}>
                <TextField
                    fullWidth
                    type="text"
                    inputProps={{ className: `${styles.input}` }}
                    id="fullWidth"
                    // className={styles.input}
                    placeholder="Nhập để tìm kiếm..."
                    // sx={{height:50}}
                    {...register('search')}
                />
            </div>
            <div className={styles.select_wrap}>
                <Controller
                    name={'sort'}
                    control={control}
                    render={({ field }) => (
                        <SelectMaterial
                            size={'small'}
                            value={field.value}
                            onChange={field.onChange}
                            // className={styles.select}
                            options={[
                                {
                                    value: 'default',
                                    text: 'Sắp xếp  ',
                                },
                                {
                                    value: 'A-Z',
                                    text: 'A-Z',
                                },
                                {
                                    value: 'Z-A',
                                    text: 'Z-A',
                                },
                                {
                                    value: 'time_asc',
                                    text: 'Mới nhất',
                                },
                                {
                                    value: 'time_desc',
                                    text: 'Cũ nhất',
                                },
                            ]}
                        />
                    )}
                />
            </div>
            <div className={styles.button} onClick={handleOpenAddModal}>
                <div className={styles.plush}>
                    <AddIcon sx={{ color: '#fff' }} />
                </div>
                <div className={styles.info}>Tạo lớp học</div>
            </div>
        </div>
    );
}

export default memo(ClassContentHeader);

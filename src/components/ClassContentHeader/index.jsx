import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import { memo } from 'react';
import TextField from '@mui/material/TextField';

import styles from './styles.module.css';
import { useFormContext, Controller } from 'react-hook-form';
import SelectMaterial from '~/components/SelectMaterial';

function ClassContentHeader({ handleOpenAddModal }) {
    const { register, control } = useFormContext();

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
                            value={field.value}
                            onChange={field.onChange}
                            label={'Sap xep'}
                            className={styles.select}
                            options={[
                                {
                                    value: 'default',
                                    text: 'sap xep',
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
                                    text: 'Moi nhat',
                                },
                                {
                                    value: 'time_desc',
                                    text: 'Cu nhat',
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

// ClassContentHeader.propTypes = {
//   handleOpenAddModal: PropTypes.func
// }
export default memo(ClassContentHeader);

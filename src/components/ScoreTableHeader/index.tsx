import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SearchIcon from '@mui/icons-material/Search';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import PropTypes from 'prop-types';
import SelectMaterial from '~/components/SelectMaterial';

import styles from './styles.module.css';
import { TextField } from '@mui/material';
import { memo } from 'react';

function ScoreTableHeader({ handleOpenAddModal = () => {} }) {
    return (
        <div className={styles.table}>
            <div className={styles.table_header}>
                <div className={styles.left}>
                    <SelectMaterial
                        label={'Bảng điểm chung'}
                        options={[
                            {
                                value: 'aac',
                                text: 'Bảng điểm chung',
                            },
                            {
                                value: 'avc',
                                text: 'Bảng điểm bài kiểm tra',
                            },
                            {
                                value: 'ac',
                                text: 'Nhóm ad',
                            },
                        ]}
                    />
                </div>
                <div className={styles.table_header_mid}>
                    <TextField inputProps={{ className: styles.table_header_mid_input }} fullWidth type="text" />
                    <div className={styles.table_header_mid_button}>
                        <SearchIcon sx={{ fontSize: 20 }} />
                        <div className={styles.table_header_mid_text}>Tìm kiếm</div>
                    </div>
                </div>
                <div className={styles.table_header_right}>
                    <div className={styles.table_header_right_icon}>
                        <LocalPrintshopIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}
ScoreTableHeader.propTypes = {
    handleOpenAddModal: PropTypes.func,
};
export default memo(ScoreTableHeader);

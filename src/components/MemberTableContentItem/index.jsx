import styles from './styles.module.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PropTypes from 'prop-types';
import { memo } from 'react';
function MemberTableContentItem({
    avatar,
    name,
    school,
    classes,
    phone,
    id,
    handleOpenModalEdit = () => {},
    handleDelete,
}) {
    return (
        <div className={styles.wrap}>
            <div className={styles.item}>
                <div className={styles.path_1}>
                    <div className={styles.left_path_1}>
                        <Avatar alt="Remy Sharp" src={avatar} sx={{ width: 34, height: 34 }} />
                    </div>
                    {name}
                    <div className={styles.right_path_1}></div>
                </div>
                <div className={styles.path_2}>
                    <div className={styles.icon} onClick={handleOpenModalEdit}>
                        <EditIcon sx={{ fontSize: 22, color: '#65697B', margin: 'auto' }} />
                    </div>
                </div>
                <div className={styles.path_3}>{school}</div>
                <div className={styles.path_4}>{classes}</div>
                <div className={styles.path_5}>{phone}</div>
                <div className={styles.path_6}>
                    <div className={styles.icon} onClick={({ a = name, idUser = id }) => handleDelete(a, idUser)}>
                        <DeleteOutlineIcon sx={{ fontSize: 22, color: '#65697B', margin: 'auto' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
MemberTableContentItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    school: PropTypes.string,
    classes: PropTypes.string,
    phone: PropTypes.string,
    handleOpenModalEdit: PropTypes.func,
    handleOpenModalDelete: PropTypes.func,
};
export default memo(MemberTableContentItem);

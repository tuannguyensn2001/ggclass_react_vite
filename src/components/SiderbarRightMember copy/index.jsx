
import styles from './styles.module.css'
import clsx from 'clsx'
import Button from '@mui/material/Button'
import { Avatar } from '@mui/material';
import PropTypes from "prop-types";

function SiderbarRightMemberItem({name,avatar}) {
    return (
        <div className={styles.user_wrap}>
            <div className={styles.user}>
                <div className={styles.avatar}>
                <Avatar sx={{height:26,width:26}} alt="Remy Sharp" src={avatar} />
                </div>
                <div className={styles.name}>{name}</div>
            </div>
            <div className={styles.action}>
                <Button className={clsx(styles.accept,styles.small)}>Duyệt</Button>
                    <Button className={clsx(styles.refuse,styles.small)}>Xóa</Button>
            </div>
        </div>
    );
}
SiderbarRightMemberItem.propTypes ={
    name: PropTypes.string,
    avatar:PropTypes.string
}
export default SiderbarRightMemberItem;
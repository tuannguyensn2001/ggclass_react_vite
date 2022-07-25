import styles from './styles.module.css';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import SiderbarRightMemberItem from '../SiderbarRightMemberItem';
import PropTypes from 'prop-types';

const defaultData = [
    {
        name: 'Võ Mạnh Cường',
        avatar: '',
    },
    {
        name: 'Võ Mạnh Cường',
        avatar: '',
    },
    {
        name: 'Võ Mạnh Cường',
        avatar: '',
    },
];
function SiderbarRightMember({ data = defaultData, handleAcceptMember }) {
    return (
        <div className={styles.wrap}>
            <div className={styles.content}>
                <div className={styles.header}>Chờ duyệt({data?.length})</div>
                {data.length > 0 ? (
                    <div className={styles.info}>
                        <div className={styles.all}>
                            <Button className={styles.accept}>Phê duyệt tất cả</Button>
                            <Button className={styles.refuse}>Từ chôí tất cả</Button>
                        </div>
                        <div className={styles.listUser}>
                            {data.map((item, index) => (
                                <SiderbarRightMemberItem
                                    handleAcceptMember={handleAcceptMember}
                                    name={item.name}
                                    avatar={item.avatar}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className={styles.noStudent}>
                        Yêu cầu vào lớp sẽ được hiển thị khi có học sinh tìm kiếm lớp bạn với mã lớp
                        <span className={styles.primary}>HJHTYD</span>
                    </div>
                )}
            </div>
        </div>
    );
}
SiderbarRightMember.propTypes = {
    data: PropTypes.array,
};
export default SiderbarRightMember;

import CheckIcon from '@mui/icons-material/Check';
import avatarDefault from '~/assets/images/avatar_default.png';
import ProfileInfoItem from '~/components/ProfileInfoItem';
import styles from './styles.module.css';
const data = [
    {
        id: 1,
        Left_icon: 'https://shub.edu.vn/images/icons/profile-item/profile-item-name.svg',
        title: 'Tên',
        value: 'Võ Mạnh Cường',
        edit: true,
        copy: false,
        nameApi: 'name',
    },
    {
        id: 2,
        Left_icon: 'https://shub.edu.vn/images/icons/profile-item/profile-item-birthday.svg',
        title: 'Ngày sinh',
        value: '06/10/2003',
        edit: true,
        copy: false,
    },
    {
        id: 3,
        Left_icon: 'https://shub.edu.vn/images/icons/profile-item/profile-item-province.svg',
        title: 'Tỉnh',
        value: '097677569',
        edit: true,
        copy: false,
    },
    {
        id: 4,
        Left_icon: 'https://shub.edu.vn/images/icons/profile-item/profile-item-school.svg',
        title: 'Trường',
        value: 'Đại học xyz',
        edit: true,
        copy: false,
    },
];

function ProfileUserInfo({ avatar = '' }) {
    return (
        <div className={styles.wrap}>
            <h5 className={styles.title}>Thông tin cá nhân</h5>
            <p className={styles.sub}>
                Cung cấp đúng thông tin cá nhân của bạn để không bị nhầm lẫn khi tham gia lớp học hoặc bài kiểm tra.
            </p>
            <div className={styles.list_info}>
                {data.map((item) => (
                    <ProfileInfoItem
                        key={item.id}
                        Left_icon={item.Left_icon}
                        title={item.title}
                        copy={item.copy}
                        edit={item.edit}
                        value={item.value}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProfileUserInfo;

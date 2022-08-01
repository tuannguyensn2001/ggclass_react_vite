import CheckIcon from '@mui/icons-material/Check';
import avatarDefault from '~/assets/images/avatar_default.png';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ProfileInfoItem from '~/components/ProfileInfoItem';
//@ts-ignore
import styles from './styles.module.css';
import { TextField } from '@mui/material';
import { Label } from '@mui/icons-material';
const data = [
    {
        id: 1,
        Left_icon: 'https://shub.edu.vn/images/icons/profile-item/profile-item-username.svg',
        title: 'Tên đăng nhập',
        value: '097677569',
        edit: false,
        copy: true,
    },
    {
        id: 2,
        Left_icon: 'https://shub.edu.vn/images/icons/profile-item/profile-item-phone.svg',
        title: 'Số điện thoại',
        value: '097677569',
        edit: true,
        copy: false,
    },
    {
        id: 3,
        Left_icon: 'https://shub.edu.vn/images/icons/profile-item/profile-item-email.svg',
        title: 'Email',
        value: '097677569',
        edit: true,
        copy: false,
    },
    {
        id: 4,
        Left_icon: 'https://shub.edu.vn/images/icons/profile-item/profile-item-password.svg',
        title: 'Mật khẩu',
        value: '097677569',
        edit: true,
        copy: false,
    },
    {
        id: 5,
        Left_icon: 'https://shub.edu.vn/images/icons/profile-item/profile-item-facebook.svg',
        title: 'Liên kết facebook',
        value: '097677569',
        edit: true,
        copy: false,
    },
];
const onChangeFile = (e: any) => {
    // test thử onChange cái type của e em test nên em cho type= any
    console.log(e);
};
function ProfileAccountInfo({ avatar = '' }) {
    return (
        <div className={styles.wrap}>
            <div className={styles.wrap_avatar}>
                <div className={styles.avatar}>
                    <img className={styles.img} alt="avatar" src={avatar ? avatar : avatarDefault} />
                    <label>
                        <CameraAltIcon className={styles.cameraAltIcon} />
                        <TextField type="file" className={styles.inputfile} onChange={onChangeFile} />
                    </label>
                </div>
                <div className={styles.upLoad}></div>
            </div>
            <h5 className={styles.title}>Thông tin tài khoản</h5>
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

export default ProfileAccountInfo;

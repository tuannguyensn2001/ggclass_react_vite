import ProfileHeader from '~/components/ProfileHeader';
import ProfileAccountInfo from '~/components/ProfileAccountInfo';
import styles from './styles.module.css';
import ProfileUserInfo from '~/components/ProfileUserInfo';

function Profile() {
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <ProfileHeader />
                <div className={styles.content}>
                    <ProfileAccountInfo />
                    <div className={styles.tips}>
                        <p className={styles.tips_title}>
                            (*) Mẹo: Nếu bạn là một người kĩ tính hãy cập nhật đúng số điện thoại hoặc email để thuận
                            tiện cho việc đăng nhập và lấy lại mật khẩu.
                        </p>
                    </div>
                    <ProfileUserInfo />
                </div>
            </div>
        </div>
    );
}
export default Profile;

import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import HeaderMenuUser from '~/components/HeaderMenuUser';
// @ts-ignore
import styles from './styles.module.css';
import useAuthStore from '~/store/useAuthStore';
// @ts-ignore
import avatarDefault from '~/assets/images/avatar_default.png';
import { useRef } from 'react';
import { Instance } from 'tippy.js';

function HeaderUser() {
    const { user, getAvatar } = useAuthStore((state) => state);

    const tippy = useRef<Instance | null>(null);

    const handleClickInside = () => {
        tippy.current?.hide();
    };

    //number, boolean, string, null, undefined, object

    return (
        <Tippy
            onMount={(instance) => {
                tippy.current = instance;
            }}
            interactive
            trigger="click"
            placement="bottom-end"
            render={() => <HeaderMenuUser onClick={handleClickInside} />}
        >
            <div className={styles.user_wrap}>
                <div className={styles.user}>
                    <Avatar src={getAvatar() || avatarDefault} />
                    <div className={styles.user_name}>{user?.username || 'username'}</div>
                    <div className={styles.user_action}>
                        <ArrowDropDownIcon fontSize="small" className={styles.icon_down} />
                    </div>
                </div>
            </div>
        </Tippy>
    );
}

export default HeaderUser;

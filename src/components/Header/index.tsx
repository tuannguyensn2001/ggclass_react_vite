import React from 'react';
import HeaderContent from '~/components/HeaderContent';
import HeaderRight from '~/components/HeaderRight';
// @ts-ignore
import styles from './Header.module.css';
import useAuthStore from '~/store/useAuthStore';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Header() {
    const user = useAuthStore((state) => state.user);

    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.logo}>
                    <img src="https://shub.edu.vn/images/brand-blue.svg" alt="logo" />
                </div>

                {Boolean(user) && (
                    <>
                        <HeaderContent />
                        <HeaderRight />
                    </>
                )}
                {!Boolean(user) && (
                    <div className={'tw-h-[64px] tw-flex tw-flex-col tw-justify-center'}>
                        <Link to={'/login'} className={'tw-no-underline'}>
                            <Button variant={'contained'}>Đăng nhập</Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;

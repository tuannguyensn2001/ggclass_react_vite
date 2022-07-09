import React from 'react';


import HeaderContent from './components/HeaderContent'
import HeaderRight from './components/HeaderRight'
import styles from './Header.module.css'

function Header() {
    
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.logo}>
                    <img src='https://shub.edu.vn/images/brand-blue.svg'  alt="logo"/>
                </div>
                <HeaderContent/>
                <HeaderRight/>
            </div>
        </div>
    );
}

export default Header;
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
// @ts-ignore
import styles from './styles.module.css';
import HeaderBell from '~/components/HeaderBell';
import HeaderUser from '~/components/HeaderUser';
// @ts-ignore
import Notification from '~/components/Notification';

function HeaderRight() {
    return (
        <div className={styles.content_right_header}>
            {/* <a className={styles.update}> */}
            {/*<div>*/}
            {/*  <TrendingUpIcon*/}
            {/*    className={styles.icon}*/}
            {/*    style={{ fontSize: 28, color: "#373a43" }}*/}
            {/*  />*/}
            {/*</div>*/}

            {/*<div className={styles.text_wrap}>*/}
            {/*      <div className={styles.street}></div>*/}
            {/*      <div className={styles.text_update}>*/}
            {/*          <p className={styles.text_content}>Nâng cấp tài khoản cá nhân cao cấp</p>*/}
            {/*      </div>*/}
            {/*</div>*/}
            {/* </a> */}
            <Tippy
                interactive
                trigger="click"
                offset={[120, -6]}
                placement="bottom-end"
                render={() => <Notification />}
            >
                <div className={styles.bell}>
                    <HeaderBell />
                    <div className={styles.numberNotification}>
                        <span className={styles.number}>20</span>
                    </div>
                </div>
            </Tippy>

            <HeaderUser />
        </div>
    );
}

export default HeaderRight;

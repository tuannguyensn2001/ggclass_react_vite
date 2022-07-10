import Avatar from "@mui/material/Avatar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import HeaderMenuUser from '~/components/HeaderMenuUser'
import styles from "./styles.module.css";
import HeaderBell from '~/components/HeaderBell'
import HeaderUser from "~/components/HeaderUser";

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
      <HeaderBell/>
      <HeaderUser/>
    </div>
  );
}

export default HeaderRight;

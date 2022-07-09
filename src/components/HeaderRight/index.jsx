import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import styles from "./styles.module.css";

function HeaderRight() {
  return (
    <div className={styles.content_right_header}>
      <a className={styles.update}>
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
      </a>
      <Tippy content="Thông báo">
        <div className={styles.bell}>
          <Avatar className={styles.bell_wrap} alt="Remy Sharp">
            <NotificationsIcon className={styles.bell_icon} />
          </Avatar>
        </div>
      </Tippy>
      <div className={styles.user_wrap}>
        <div className={styles.user}>
          <Avatar src="~/assets/images/avatar_default.png" />
          <div className={styles.user_name}>Cuong</div>
          <div className={styles.user_action}>
            <ArrowDropDownIcon fontSize="small" className={styles.icon_down} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderRight;

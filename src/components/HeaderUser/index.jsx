import Avatar from "@mui/material/Avatar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import HeaderMenuUser from "~/components/HeaderMenuUser";
import styles from "./styles.module.css";
import useAuthStore from "~/store/useAuthStore";
import avatarDefault from "~/assets/images/avatar_default.png";

function HeaderUser() {
  const user = useAuthStore((state) => state.user);

  return (
    <>
      <Tippy
        interactive
        trigger="click"
        placement="bottom-end"
        render={() => <HeaderMenuUser />}
      >
        <div className={styles.user_wrap}>
          <div className={styles.user}>
            <Avatar src={avatarDefault} />
            <div className={styles.user_name}>
              {user?.username || "username"}
            </div>
            <div className={styles.user_action}>
              <ArrowDropDownIcon
                fontSize="small"
                className={styles.icon_down}
              />
            </div>
          </div>
        </div>
      </Tippy>
    </>
  );
}

export default HeaderUser;

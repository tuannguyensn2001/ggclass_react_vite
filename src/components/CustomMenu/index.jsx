import Tippy from "@tippyjs/react/headless";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import "tippy.js/dist/tippy.css";
import Paper from "@mui/material/Paper";
import { useRef } from "react";

function CustomMenu({ children, list, renderTextMenu }) {
  const ref = useRef(null);

  const handleClickMenu = () => {
    ref.current.hide();
  };

  return (
    <div>
      <Tippy
        trigger={"click"}
        interactive={true}
        placement={"bottom"}
        hideOnClick
        onMount={(instance) => {
          ref.current = instance;
        }}
        render={() => (
          <Paper>
            <MenuList onClick={handleClickMenu}>
              {list?.map((item, index) => (
                <MenuItem {...item.props} key={index}>
                  {renderTextMenu(item)}
                </MenuItem>
              ))}
            </MenuList>
          </Paper>
        )}
      >
        <div>{children}</div>
      </Tippy>
    </div>
  );
}

export default CustomMenu;

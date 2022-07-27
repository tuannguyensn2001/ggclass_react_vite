import Tippy from '@tippyjs/react/headless';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import 'tippy.js/dist/tippy.css';
import Paper from '@mui/material/Paper';
import { useRef } from 'react';
import { Instance } from 'tippy.js';

interface Prop {
    children: JSX.Element | JSX.Element[];
    list: any;
    renderTextMenu: Function;
}

function CustomMenu({ children, list, renderTextMenu }: Prop) {
    const ref = useRef<Instance | null>(null);

    const handleClickMenu = () => {
        if (!ref?.current) return;
        ref.current.hide();
    };

    return (
        <div>
            <Tippy
                trigger={'click'}
                interactive={true}
                placement={'bottom'}
                hideOnClick
                onMount={(instance) => {
                    ref.current = instance;
                }}
                render={() => (
                    <Paper>
                        <MenuList onClick={handleClickMenu}>
                            {list?.map((item: any, index: number) => (
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

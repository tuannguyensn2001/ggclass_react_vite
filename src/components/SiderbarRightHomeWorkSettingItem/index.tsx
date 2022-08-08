import { Link } from 'react-router-dom';
// @ts-ignore
import styles from './styles.module.css';
import clsx from 'clsx';
import React from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
interface Props {
    to: string;
    active?: boolean;
    name: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
        muiName: string;
    };
}

function SiderbarRightHomeWorkSettingItem({ to, active, name, Icon }: Props) {
    return (
        <Link
            to={to}
            className={clsx(styles.bottom_item, {
                [styles.focus]: active,
            })}
        >
            <h4 className={styles.name}>{name}</h4>
            <h5 className={styles.icon}>{React.createElement(Icon)}</h5>
        </Link>
    );
}

export default SiderbarRightHomeWorkSettingItem;

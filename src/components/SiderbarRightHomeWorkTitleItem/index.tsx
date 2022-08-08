import { Link } from 'react-router-dom';
// @ts-ignore
import styles from './styles.module.css';
import clsx from 'clsx';
import React from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
interface Props {
    value: string;
    name: string;
}

function SiderbarRightHomeWorkTitleItem({ value, name }: Props) {
    return (
        <h4 className={styles.top_item}>
            <h5 className={styles.top_name}>{name}</h5>
            <span className={styles.title}>{value}</span>
        </h4>
    );
}

export default SiderbarRightHomeWorkTitleItem;

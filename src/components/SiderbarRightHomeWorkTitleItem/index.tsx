// @ts-ignore
import styles from './styles.module.css';
import React from 'react';

interface Props {
    value: string | undefined;
    name: string;
}

function SiderbarRightHomeWorkTitleItem({ value, name }: Props) {
    return (
        <h4 className={styles.top_item}>
            <span className={styles.top_name}>{name}</span>
            <span className={styles.title}>{value}</span>
        </h4>
    );
}

export default SiderbarRightHomeWorkTitleItem;

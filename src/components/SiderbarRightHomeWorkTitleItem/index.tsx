import React from 'react';
// @ts-ignore
import styles from './styles.module.css';

interface Props {
    value: string | undefined;
    name: string;
}

function SiderbarRightHomeWorkTitleItem({ value, name }: Props) {
    return (
        <h4 className={styles.top_item}>
            <h5 className={styles.top_name}>{name}</h5>
            <span className={styles.top_name}>{name}</span>
            <span className={styles.title}>{value}</span>
        </h4>
    );
}

export default SiderbarRightHomeWorkTitleItem;

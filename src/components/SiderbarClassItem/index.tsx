// @ts-ignore
import styles from './styles.module.css';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

interface Prop {
    active?: boolean;
    footer: boolean;
    Icon: any;
    text: string;
    to: string;
}

function SiderbarClassitem({ active = false, footer = false, Icon = Fragment, text = '', to = '' }: Prop) {
    return (
        <Link
            to={to}
            className={clsx(styles.wrap, {
                [styles.active]: active,
                [styles.footer]: footer,
            })}
        >
            <div className={styles.icon_wrap}>
                <Icon className={styles.icon} />
            </div>
            <div className={styles.text}>{text}</div>
        </Link>
    );
}

export default SiderbarClassitem;

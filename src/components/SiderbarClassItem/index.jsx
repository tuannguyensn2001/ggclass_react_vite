
import NewspaperIcon from '@mui/icons-material/Newspaper';
import styles from './styles.module.css';
import clsx from 'clsx';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Fragment } from 'react';

function SiderbarClassitem({active=false,footer=false,Icon=Fragment,text='',to=''}) {
    return (
            <Link to={to} className={clsx(styles.wrap,{
                [styles.active]:active,
                [styles.footer]:footer
            })}>
                <div className={styles.icon_wrap}>
                    <Icon className={styles.icon}/>
                </div>
                <div className={styles.text}>{text}</div>
            </Link>
    );
}
SiderbarClassitem.propTypes = {
    active:PropTypes.bool,
    footer:PropTypes.bool,
    Icon:PropTypes.object,
    text:PropTypes.string,
    to:PropTypes.string,
}

export default SiderbarClassitem;
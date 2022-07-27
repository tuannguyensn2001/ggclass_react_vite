import { Link } from 'react-router-dom';
// @ts-ignore
import styles from './style.module.css';
import clsx from 'clsx';

interface Prop {
    text: string;
    to: string;
    active: boolean;
}

function HeaderContentItem({ text, to, active }: Prop) {
    return (
        <Link className={clsx([styles.item, { [styles.active]: Boolean(active) }, 'tw-no-underline'])} to={to}>
            {text}
        </Link>
    );
}

export default HeaderContentItem;

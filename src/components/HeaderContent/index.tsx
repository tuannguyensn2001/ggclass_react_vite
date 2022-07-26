import { useEffect, useMemo, useState } from 'react';
// @ts-ignore
import styles from './styles.module.css';
import HeaderContentItem from '~/components/HeaderContentItem';
import { useLocation } from 'react-router-dom';

const config = [
    {
        text: 'Lớp học',
        to: '/class',
    },
    {
        text: 'Học liệu',
        to: '/resource',
    },
];

function HeaderContent() {
    const location = useLocation();
    const active = useMemo(() => {
        const { pathname } = location;

        const result = config.find((item) => pathname.includes(item.to));

        return result?.to;
    }, [location]);
    return (
        <div className={styles.wrap}>
            {config.map((item) => (
                <HeaderContentItem active={item.to === active} key={item.to} text={item.text} to={item.to} />
            ))}
        </div>
    );
}

export default HeaderContent;

import Header from '~/components/Header';
// @ts-ignore
import styles from './style.module.scss';

interface Prop {
    children: JSX.Element | JSX.Element[];
}

function DefaultLayout({ children }: Prop) {
    return (
        <div>
            <Header />

            <div>
                {/*<div>{children}</div>*/}
                <div className={styles.wrapper}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;

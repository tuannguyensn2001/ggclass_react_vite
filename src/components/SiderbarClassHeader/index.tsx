import InsertLinkIcon from '@mui/icons-material/InsertLink';

// @ts-ignore
import styles from './styles.module.css';

function SiderbarClassHeader() {
    return (
        <div className={styles.header}>
            <h4 className={styles.header_name}>Võ Mạnh Cường</h4>
            <div className={styles.header_class}>
                <div className={styles.header_icon}>
                    <InsertLinkIcon className={styles.icon} />
                </div>
                <div className={styles.class_code}>
                    Mã lớp: <span className={styles.code}>OUSNP</span>
                </div>
            </div>
        </div>
    );
}

export default SiderbarClassHeader;

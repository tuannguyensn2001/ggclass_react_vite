import InsertLinkIcon from '@mui/icons-material/InsertLink';

// @ts-ignore
import styles from './styles.module.css';
import { useParams } from 'react-router-dom';
import useDetailClass from '~/hooks/useDetailClass';

function SiderbarClassHeader() {
    const { id } = useParams();

    const detailClass = useDetailClass(Number(id));

    return (
        <div className={styles.header}>
            <h4 className={styles.header_name}>{detailClass?.name}</h4>
            <div className={styles.header_class}>
                <div className={styles.header_icon}>
                    <InsertLinkIcon className={styles.icon} />
                </div>
                <div className={styles.class_code}>
                    Mã lớp: <span className={styles.code}>{detailClass?.code}</span>
                </div>
            </div>
        </div>
    );
}

export default SiderbarClassHeader;

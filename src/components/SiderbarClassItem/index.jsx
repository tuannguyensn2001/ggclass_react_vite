
import NewspaperIcon from '@mui/icons-material/Newspaper';
import styles from './styles.module.css';
import clsx from 'clsx';
function SiderbarClassitem({active=true,footer=false}) {
    return (
        <div className={clsx(styles.wrap,{
            [styles.active]:active,
            [styles.footer]:footer
        })}>
            <div className={styles.icon_wrap}>
                <NewspaperIcon className={styles.icon}/>
            </div>
            <div className={styles.text}>Bảng tin </div>
        </div>
    );
}

export default SiderbarClassitem;
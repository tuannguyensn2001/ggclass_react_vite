import LesssonContentHeader from '~/components/LesssonContentHeader';
import CardVideo from '~/components/CardVideo';
import styles from './styles.module.css';

function LesssonContent() {
    return (
        <div className={styles.wrap}>
            <LesssonContentHeader />
            <div className={styles.list_card}>
                <CardVideo />
                <CardVideo />
                {/* <div className={styles.noVideo}>Lớp học chưa có bài giảng nào</div> */}
            </div>
        </div>
    );
}

export default LesssonContent;

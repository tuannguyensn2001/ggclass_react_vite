import LesssonContentHeader from '~/components/LesssonContentHeader';
import CardVideo from '~/components/CardVideo';
import styles from './styles.module.css';
import PropTypes from 'prop-types';
function LesssonContent({ data }) {
    return (
        <div className={styles.wrap}>
            <LesssonContentHeader />
            <div className={styles.list_card}>
                {data && data?.length > 0 ? (
                    data.map((item, index) => (
                        <CardVideo name={item?.name} video={item?.video} viewer={item?.viewer} time={item?.time} />
                    ))
                ) : (
                    <div className={styles.noVideo}>Lớp học chưa có bài giảng nào</div>
                )}
            </div>
        </div>
    );
}
LesssonContent.propTypes = {
    data: PropTypes.array,
};
export default LesssonContent;

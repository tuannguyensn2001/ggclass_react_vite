import HomeWorkContentHeader from '~/components/HomeWorkContentHeader';
import CardVideo from '~/components/CardVideo';
import styles from './styles.module.css';
import PropTypes from 'prop-types';
import HomeWorkItem from '~/components/HomeWorkItem';
function HomeWorkContent({ data }) {
    return (
        <div className={styles.wrap}>
            <HomeWorkContentHeader />
            <div className={styles.list_card}>
                {data.map((item) => (
                    <HomeWorkItem
                        value={item?.value}
                        type={item?.type}
                        style={item?.style}
                        key={item.name}
                        name={item?.name}
                    />
                ))}
            </div>
        </div>
    );
}
HomeWorkContent.propTypes = {
    data: PropTypes.array,
};
export default HomeWorkContent;

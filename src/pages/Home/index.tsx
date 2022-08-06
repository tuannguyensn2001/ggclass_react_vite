import HomeHeader from '~/components/HomeHeader';
import HomePartOne from '~/components/HomePartOne';
import HomePartTwo from '~/components/HomePartTwo';
import HomePartThree from '~/components/HomePartThree';
import HomePartFour from '~/components/HomePartFour';
import HomePartFive from '~/components/HomePartFive';
import HomeFooter from '~/components/HomeFooter';
import styles from './styles.module.css';

function Home() {
    return (
        <div className={styles.wrap}>
            <HomeHeader />
            <HomePartOne />
            <HomePartTwo />
            <HomePartThree />
            <HomePartFour />
            <HomePartFive />
            <HomeFooter />
        </div>
    );
}

export default Home;

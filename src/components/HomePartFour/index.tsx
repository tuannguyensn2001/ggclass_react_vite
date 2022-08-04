import { Button } from '@mui/material';
import clsx from 'clsx';
import Slider from 'react-slick';
import HomePartFourItem from '~/components/HomePartFourItem';
import styles from './styles.module.css';
const datas = [
    {
        title: 'Việc trồng rừng ven biển ở Bắc Trung bộ có tác dụng chính là',
    },
    {
        title: 'Biện pháp nào sau đây không được áp dụng khi phòng chống bão?',
    },
    {
        title: 'Thời gian khô hạn kéo dài nhất ở các tỉnh nào sau đây?',
    },
    {
        title: 'Tình trạng mất cân bằng sinh thái môi trường ở nước ta biểu hiện rõ nhất ở',
    },
    {
        title: 'Vùng chịu ảnh hưởng mạnh của gió Tây khô nóng là',
    },
    {
        title: 'Mùa khô thường kéo dài 6 - 7 tháng ở vùng nào sau đây?',
    },
    {
        title: 'Mùa khô thường kéo dài 6 - 7 tháng ở vùng nào sau đây?',
    },
    {
        title: 'Ở đồng bằng Nam Bộ mùa khô thường kéo dài mấy tháng?',
    },
    {
        title: 'Việc trồng rừng ven biển ở Bắc Trung bộ có tác dụng chính là',
    },
    {
        title: 'Việc trồng rừng ven biển ở Bắc Trung bộ có tác dụng chính là',
    },
    {
        title: 'Việc trồng rừng ven biển ở Bắc Trung bộ có tác dụng chính là',
    },
    {
        title: 'Việc trồng rừng ven biển ở Bắc Trung bộ có tác dụng chính là',
    },
];
datas.push(...datas);
function HomePartFour() {
    var settings = {
        rows: 3,
        dots: true,
        // infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    return (
        <div className={styles.wrap}>
            <h2 className={styles.header}>Kho học liệu số khổng lồ</h2>
            <div className={styles.listSlide}>
                <Slider {...settings}>
                    {datas.map((item, index) => (
                        <HomePartFourItem key={index} title={item.title} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}
export default HomePartFour;

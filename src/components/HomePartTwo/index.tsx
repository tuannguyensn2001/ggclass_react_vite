import { Button } from '@mui/material';
import HomePartTwoItem from '~/components/HomePartTwoItem';
import clsx from 'clsx';
import styles from './styles.module.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const contexts = [
    {
        urlVideo:
            'https://shub-storage.sgp1.cdn.digitaloceanspaces.com/profile_images/landing_page_2022/1TaoBaiTapKiemTra.mp4',
        header: 'Tạo và quản lý bài tập, kiểm tra bằng AI',
        title: 'Không cần soạn thảo các công thức phức tạp, mọi thứ được nhận diện hoàn toàn tự động với SHub Classroom. Bên cạnh đó, bạn còn được cung cấp đa dạng các tùy chỉnh chuyên sâu theo từng nhu cầu sử dụng.',
    },
    {
        urlVideo:
            'https://shub-storage.sgp1.cdn.digitaloceanspaces.com/profile_images/landing_page_2022/3LopHocTuyBien.mp4',
        header: 'Lớp học với độ tùy biến cao',
        title: 'Lớp học trên SHub Classroom có thể dùng cho nhiều mục đích khác nhau như: Lớp học chính khóa, lớp học thêm, lớp ngoại ngữ, kỹ năng chuyên môn, nghiệp vụ, lớp học trực tuyến, livestream … ',
        videoRight: true,
    },
    {
        urlVideo:
            'https://shub-storage.sgp1.cdn.digitaloceanspaces.com/profile_images/landing_page_2022/4TaiNguyenLop.mp4',
        header: 'Dễ dàng cung cấp tài nguyên cho lớp học',
        title: 'Không còn gửi link tài liệu, không còn gửi mail hay gửi file vào nhóm chat, SHub Classroom giúp bạn cung cấp đầy đủ tài liệu và bài giảng cho học sinh của mình. Bên cạnh đó, lượt xem và sự tương tác của học sinh cũng được thống kê chi tiết trên từng tài nguyên cụ thể. ',
    },
    {
        urlVideo: 'https://shub-storage.sgp1.cdn.digitaloceanspaces.com/profile_images/landing_page_2022/10HocLieu.mp4',
        header: 'Lưu trữ học liệu không giới hạn',
        title: 'Tài nguyên của bạn được lưu trữ và sắp xếp một cách tiện lợi, bạn có thể chia sẻ cho học sinh và sử dụng lại các tài nguyên này cho những lớp học kế tiếp.',
        videoRight: true,
    },
];
const contexts2 = [
    {
        urlVideo: 'https://shub-storage.sgp1.cdn.digitaloceanspaces.com/profile_images/landing_page_2022/6BangDiem.mp4',
        header: 'Bảng điểm chi tiết quá trình học tập',
        title: 'SHub Classroom cung cấp các tính năng quản lý điểm với nhiều cấp độ khác nhau, đảm bảo cung cấp góc nhìn từ tổng quan đến chi tiết cho giáo viên về lớp và học sinh của mình. ',
        videoTop: true,
    },
    {
        urlVideo: 'https://shub-storage.sgp1.cdn.digitaloceanspaces.com/profile_images/landing_page_2022/7LichDay.mp4',
        header: 'Quản lý lịch dạy thông minh',
        title: 'Các hoạt động dạy học trực tiếp và trực tuyến đều có thể thực hiện dễ dàng trên SHub Classroom. Bạn có thể nhanh chóng tạo và truy cập lịch dạy của mình.',
        videoTop: true,
    },
    {
        urlVideo:
            'https://shub-storage.sgp1.cdn.digitaloceanspaces.com/profile_images/landing_page_2022/5NhomHocTap.mp4',
        header: 'Tổ chức lớp học thành từng nhóm nhỏ',
        title: 'SHub Classroom cho phép chia danh sách học sinh thành nhiều nhóm và chỉ định tài nguyên cho từng nhóm cụ thể. Bạn có thể tùy chỉnh thành viên trong nhóm, chỉnh sửa thông tin, thêm bài tập và tài liệu cho từng nhóm.',
        videoTop: true,
    },
    {
        urlVideo: 'https://shub-storage.sgp1.cdn.digitaloceanspaces.com/profile_images/landing_page_2022/8BangTin.mp4',
        header: 'Kết nối giáo viên và học sinh thông qua bảng tin',
        title: 'Thay vì sử dụng các nền tảng mạng xã hội, SHub Classroom hỗ trợ các tính năng giúp tăng cường mối liên kết giữa người dạy và người học.',
        videoTop: true,
    },
    {
        urlVideo:
            'https://shub-storage.sgp1.cdn.digitaloceanspaces.com/profile_images/landing_page_2022/9NhiemVuHocTap.mp4',
        header: 'Liệt kê nhiệm vụ học tập của học sinh',
        title: 'SHub Classroom liệt kê chi tiết và hỗ trợ thực hiện các nhiệm vụ học tập hằng ngày cũng như thông báo từ giáo viên, giúp người học không bỏ lỡ kiến thức cũng như duy trì sự gắn kết với lớp học của mình.',
        videoTop: true,
    },
    {
        urlVideo:
            'https://shub-storage.sgp1.cdn.digitaloceanspaces.com/profile_images/landing_page_2022/2PhanQuyen.mp4',
        header: 'Phân quyền vai trò quản lý lớp',
        title: 'SHub Classroom hỗ trợ nhiều vai trò trong một lớp học. Người dùng có thể thêm trợ giảng hay quản trị viên để thực hiện các thao tác trong lớp học của mình.',
        videoTop: true,
    },
];
function HomePartTwo() {
    return (
        <div className={styles.wrap}>
            <div className={styles.iconDown}>
                <ArrowDropDownIcon className={styles.down} />
            </div>
            <div className={styles.content}>
                <div className={styles.background}>
                    <h2 className={styles.header1}>SHub Classroom mang đến cho bạn</h2>
                    <h1 className={styles.header2}>Tất cả công cụ dạy học hiện đại</h1>
                </div>
                <div className={styles.mid}>
                    {contexts.map((item) => (
                        <HomePartTwoItem
                            key={item.urlVideo}
                            header={item.header}
                            title={item.title}
                            videoRight={item?.videoRight}
                            urlVideo={item.urlVideo}
                        />
                    ))}
                    <h1 className={styles.bottomHeader}>Bảng điểm, tạo lịch dạy, nhóm học tập, kết nối</h1>
                    <h2 className={styles.bottomTitle}>Đa dạng các công cụ quản lý - hỗ trợ dạy học offline, online</h2>

                    <div className={styles.listVideoBottom}>
                        {contexts2.map((item) => (
                            <div style={{ width: '50%' }}>
                                <HomePartTwoItem
                                    key={item.urlVideo}
                                    header={item.header}
                                    title={item.title}
                                    videoTop={item?.videoTop}
                                    urlVideo={item.urlVideo}
                                    style={{ width: '50%' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.backgroundBottom}></div>
            </div>
        </div>
    );
}

export default HomePartTwo;

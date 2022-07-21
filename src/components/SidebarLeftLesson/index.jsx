import styles from "./styles.module.scss";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { style } from "@mui/system";

function SidebarLeftLesson() {
    return <div className={styles.nav}>
        <div className={styles.head}>
            <p>Thư mục</p>
            <img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2AVc0-gaQts13-2gH1OTsX9aUO_uWh1ioTw&usqp=CAU" alt="" />
        </div>
        <div>
            <div className={`${styles.head} ${styles.lessons}`}>
                <img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmAMu0K6NgCzhV6BjNsqfAPnXEapi0HjvO7cSJZP4U1lSDxFBxa-icFwQZbYB1V22wA4&usqp=CAU" alt="" />
                <div className={styles.lesson}>
                    <p className={styles.class_name}>Tất cả bài giảng</p>
                </div>
            </div>
            <div className={`${styles.head} ${styles.lessons}`}>
                <img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmAMu0K6NgCzhV6BjNsqfAPnXEapi0HjvO7cSJZP4U1lSDxFBxa-icFwQZbYB1V22wA4&usqp=CAU" alt="" />
                <div className={styles.lesson}>
                    <p className={styles.class_name}>Bài giảjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjng 1</p>
                    <Tippy
                        trigger='click'
                        interactive= 'true'
                        render={() => option()}>
                        <img className={styles.img_option} src="https://www.shareicon.net/data/512x512/2016/06/04/775696_interface_512x512.png" alt="" />
                    </Tippy>
                </div>
            </div>
            <div className={`${styles.head} ${styles.lessons}`}>
                <img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmAMu0K6NgCzhV6BjNsqfAPnXEapi0HjvO7cSJZP4U1lSDxFBxa-icFwQZbYB1V22wA4&usqp=CAU" alt="" />
                <div className={styles.lesson}>
                    <p className={styles.class_name}>Bài giảng 2</p>
                        <Tippy
                            trigger='click'
                            interactive= 'true'
                            render={() => option()}>
                            <img className={styles.img_option} src="https://www.shareicon.net/data/512x512/2016/06/04/775696_interface_512x512.png" alt="" />
                        </Tippy>
                </div>
            </div>
        </div>
    </div>
}

export default SidebarLeftLesson;

function option() {
    return <div>
        <ul className={styles.cover_op}>
            <li className={styles.op}>
                <img className={styles.img_op} src="https://cdn-icons-png.flaticon.com/512/1244/1244877.png" alt="" />
                <p>Đổi tên</p>
            </li>
            <li className={styles.op}>
                <img className={styles.img_op} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkMmYwGwS1YuOEJduBO4lsPU17j4o0oNZDg&usqp=CAU" alt="" />
                <p>Xóa</p>
            </li>
        </ul>
    </div>
}
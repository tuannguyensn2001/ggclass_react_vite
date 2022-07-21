import styles from "./styles.module.scss";

function SidebarLeftLesson() {
    return <div className={styles.nav}>
        <div className={styles.head}>
            <p>Thư mục</p>
            <img className={styles.img} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAADy8vLT09Pp6enm5uYwMDD7+/vj4+NhYWFDQ0Pv7+/g4ODX19d6eno0NDSHh4diYmKgoKBWVlZBQUHHx8c8PDwqKipnZ2eampohISFcXFy4uLgMDAyxsbEbGxtKSkqQkJAKTePFAAACfUlEQVR4nO3dXVfiMBCA4QTFshU/tupSQFf2///JXfTKg7KTZNpMxve59kjeMxTaHiAhAAAAAAAAAAAANGI93PZ3V0k2Y+1Fyy22u5hjX3vhUvdZeUc/ai9d5CK7r5EpbksCW5jibVmg/SnmH4KNTPG5PNB24rVGoOnEvU5h/Fk75CtF7xMfWJ3ig1qh0SkqHYXvTE5x0Cw0OUXFJ+mRwSm+6Bbam6LqYWgyca1eaO2JeqNfGMfFFLrMQr33++ntxt/XvguP9hfeC2M8LL0Xxji4L0y7o9BkYezdF6ZMsdHCuHVfGNfuCx/dF8Yn94XS19N2C6Pw3KbhQuGpTcOFD+4LX90XxoX7wkv3hTfuC2WX+xRaRiGF9lFIoX0VC5eh+ygsp3iYioWnJ4yXUzwMhRQWoFAJhRQWoFAJhRQWoFAJhRQWoFAJhRQWoFAJhRQWoFAJhbMWtnhXf7X82iePc+avV0YLRf9dxmhh7pd0TnUUUkghhRRSSCGFFFJIIYWOC9UCzV4f+r/GP8fHfZpzvuO9NgqzUEhhAQqVUEhhAQqVUEhhAQqVUEhhAQqVUEhhAQqVUEhhAf+F/n9TYSYUUmgfhRTaR+F3KZxiB4+5yH77MvujHgasRIX6O+nMR7ZhSfZHrup7EQWG0NdeaLaDsLBwB9KKpNsjTLDh00zEuyNsaq8005U0UGcX0gqexYWNDlE+wlZP3JJ2tire77iC+5TAEB5rrzfZIS0wdK0dineJgaG1M5vUCb5R2Jp7Nn9yAv9dKP6qvXChXnwuc+KphcZeugnS59bDuKudcMZmHGQXvf/RTbKLaDm9ryEBAAAAAAAAAAAAAAAAAAAI/QXmqGzB9RqJEQAAAABJRU5ErkJggg==" alt="" />
        </div>
        <div>
            <div className={`${styles.head} ${styles.lessons}`}>
                <img className={styles.img} src="https://icons-for-free.com/download-icon-files+folder+icon-1320196394707568948_512.png" alt="" />
                <div className={styles.lesson}>
                    <p className={styles.class_name}>Tất cả bài giảng</p>
                </div>
            </div>
            <div className={`${styles.head} ${styles.lessons}`}>
                <img className={styles.img} src="https://icons-for-free.com/download-icon-files+folder+icon-1320196394707568948_512.png" alt="" />
                <div className={styles.lesson}>
                    <p className={styles.class_name}>Bài giảng 1</p>
                    <img className={styles.img_option} src="https://www.shareicon.net/data/512x512/2016/06/04/775696_interface_512x512.png" alt="" />
                </div>
            </div>
            <div className={`${styles.head} ${styles.lessons}`}>
                <img className={styles.img} src="https://icons-for-free.com/download-icon-files+folder+icon-1320196394707568948_512.png" alt="" />
                <div className={styles.lesson}>
                    <p className={styles.class_name}>Bài giảng 2</p>
                    <img className={styles.img_option} src="https://www.shareicon.net/data/512x512/2016/06/04/775696_interface_512x512.png" alt="" />
                </div>
            </div>
        </div>
    </div>;
}

export default SidebarLeftLesson;

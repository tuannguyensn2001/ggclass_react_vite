import styles from "./style.module.scss";

function CommentWrite() {
    return (
        <div className={styles.cover_input}>
            <div className={styles.avatar}>
                <img className={styles.img} src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-1/101830537_1239845979691749_228845925963615578_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=1UXkm3mh76MAX-OJ8-o&tn=VK2XOghYpsrfDvQB&_nc_ht=scontent.fdad3-4.fna&oh=00_AT8VYNY3j2me3h_MGaBwG1bAnWmmNn48g4JFn5lrueiMRQ&oe=62F2C6AE" alt="" />
            </div>
            <div className={styles.input}>
                <input className={styles.input_text} placeholder="Viết bình luận ..." type="text"/>
            </div>
        </div>
    );
}

export default CommentWrite;
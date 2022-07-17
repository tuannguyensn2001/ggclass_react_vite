import styles from "./style.module.scss";

function Comment() {
  return (
    <div className={styles.cover}>
      <div className={styles.avatar}>
        <img className={styles.img} src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-1/101830537_1239845979691749_228845925963615578_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=1UXkm3mh76MAX-OJ8-o&tn=VK2XOghYpsrfDvQB&_nc_ht=scontent.fdad3-4.fna&oh=00_AT8VYNY3j2me3h_MGaBwG1bAnWmmNn48g4JFn5lrueiMRQ&oe=62F2C6AE" alt="" />
      </div>

      <div className={styles.cover_comment}>
        <div className={styles.comment}>
          <div>
            <p className={styles.name}>Anh Phung <span className={styles.day}> - 12 phút trước</span></p>
          </div>
          <div>
            <p>Bạn ơi bạn tìm hiểu thử trung tâm IELTS Lingo Connector nhé. Có cả lớp onl lẫn off nè mà học phí onl thấp hơn ý. Trung tâm chuyên luyện Ielts cho các anh/chị định cư và các bạn đi du học nên bạn yên tâm về uy tín và chất lượng giảng dạy ạ. Có chữa Writing á</p>
          </div>
        </div>
        <div>
          <img className={`${styles.img} ${styles.btn}`} src="https://www.shareicon.net/data/512x512/2016/06/07/777348_interface_512x512.png" alt="" />
        </div>
      </div>
    </div>

  );
}

export default Comment;

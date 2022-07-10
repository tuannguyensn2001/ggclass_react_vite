import styles from "./style.module.scss";

function CardCourse() {
  return (
      <div className={styles.introduce}>
        <img  className={styles.img} src="https://shub-storage.sgp1.cdn.digitaloceanspaces.com/classes/JSLPA/1657447270082" alt="" />
        <div className={styles.til}>
          <div className={styles.left}>
            <p className={styles.name}>English for beginners</p>
            <p className={styles.id}>JSLPA</p>
          </div>
          <div>
            <img className={styles.icon} src="https://www.shareicon.net/data/512x512/2016/06/04/775696_interface_512x512.png" alt="" />
          </div>
        </div>
      </div>
  );
}

export default CardCourse;

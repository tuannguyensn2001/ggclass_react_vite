import Header from "~/components/Header";
import styles from "./style.module.scss";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />

      <div>
        {/*<div>{children}</div>*/}
        <div className={styles.wrapper}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;

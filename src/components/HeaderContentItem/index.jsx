import { Link } from "react-router-dom";
import styles from "./style.module.css";
import clsx from "clsx";

function HeaderContentItem({ text, to, active }) {
  return (
    <Link
      className={clsx([
        styles.item,
        { [styles.active]: Boolean(active) },
        "tw-no-underline",
      ])}
      to={to}
    >
      {text}
    </Link>
  );
}

export default HeaderContentItem;

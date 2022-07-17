import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useRef } from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

function ScheduletableHeaderItem({ text, date, addSchedule }) {
  return (
    <div className={styles.header_item}>
      <h6 className={styles.header_item_top}>{text}</h6>
      <div className={styles.header_item_bottom}>
        <div className={styles.date}>{date}</div>
        <div className={styles.add_icon_wrap}>
          <div className={styles.add_icon}>
            <AddCircleIcon onClick={addSchedule} sx={{ fontSize: 21 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
ScheduletableHeaderItem.propTypes = {
  text: PropTypes.string,
  date: PropTypes.string,
};

export default ScheduletableHeaderItem;

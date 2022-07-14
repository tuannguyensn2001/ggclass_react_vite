import ScheduleContent from "~/components/ScheduleContent";
import ScheduleHeader from "~/components/ScheduleHeader";

import styles from './styles.module.css'
function Schedule() {
  return <div className={styles.wrap}>
    <ScheduleHeader/>
    <ScheduleContent/>
  </div>;
}

export default Schedule;

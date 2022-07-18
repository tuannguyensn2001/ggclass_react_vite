import weekOfYear from "dayjs/plugin/weekOfYear";
import isoWeek from "dayjs/plugin/isoWeek";
import weekYear from "dayjs/plugin/weekYear";
import weekDay from "dayjs/plugin/weekday";

import dayjs from "dayjs";

dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);
dayjs.extend(weekYear);
dayjs.extend(weekDay);

export default dayjs;

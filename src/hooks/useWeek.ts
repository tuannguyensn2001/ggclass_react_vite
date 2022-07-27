import { useState, useMemo } from "react";
import dayjs from "~/packages/dayjs";

export default function useWeek() {
  const [week, setWeek] = useState(0);

  const increaseWeek = () => setWeek((prevState) => prevState + 1);
  const decreaseWeek = () => setWeek((prevState) => prevState - 1);
  const backToNow = () => setWeek(0);

  const currentWeek = useMemo(() => {
    const day = dayjs().weekday(7 * week);
    return [day.startOf("isoWeek"), day.endOf("isoWeek")];
  }, [week]);
  return {
    week,
    increaseWeek,
    decreaseWeek,
    backToNow,
    currentWeek,
  };
}

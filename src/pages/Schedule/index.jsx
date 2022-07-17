import { Grid } from "@mui/material";
import { Fragment, useMemo } from "react";
import { useState } from "react";

import styles from "./styles.module.css";
import ScheduleColTable from "~/components/ScheduleColTable";
import ScheduleHeader from "~/components/ScheduleHeader";
import dayjs from "~/packages/dayjs";

const dates = [
  {
    text: "Thứ 2",
    date: "19/7",
    children: [
      {
        time: "7:00",
        name: "Học lập trình",
        number: "9/9",
      },
    ],
  },
  {
    text: "Thứ 3",
    date: "19/7",
    children: [
      {
        time: "7:00",
        name: "Học lập trình",
        number: "9/9",
      },
    ],
  },
  ,
  {
    text: "Thứ 4",
    date: "19/7",
    children: [
      {
        time: "7:00",
        name: "Học lập trình",
        number: "9/9",
      },
    ],
  },
  {
    text: "Thứ 5",
    date: "19/7",
    children: [
      {
        time: "7:00",
        name: "Học lập trình",
        number: "9/9",
      },
    ],
  },
  {
    text: "Thứ 6",
    date: "19/7",
    children: [
      {
        time: "7:00",
        name: "Học lập trình",
        number: "9/9",
      },
    ],
  },
  {
    text: "Thứ 7",
    date: "19/7",
    children: [
      {
        time: "7:00",
        name: "Học lập trình",
        number: "9/9",
      },
      {
        time: "7:00",
        name: "Học lập trình",
        number: "9/9",
      },
      {
        time: "7:00",
        name: "Học lập trình",
        number: "9/9",
      },
      {
        time: "7:00",
        name: "Học lập trình",
        number: "9/9",
      },
      {
        time: "7:00",
        name: "Học lập trình",
        number: "9/9",
      },
    ],
  },
  {
    text: "Chủ nhật",
    date: "19/7",
    children: [],
  },
];

function Schedule() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    console.log("open");
    setIsOpenModal(true);
  };

  // const dates = useMemo(() => {}, []);

  const [week, setWeek] = useState(() => {
    return dayjs().week();
  });

  return (
    <div className={styles.wrap}>
      <ScheduleHeader />
      <Grid container>
        {dates?.map((item, index) => {
          return (
            <ScheduleColTable
              week={week}
              addSchedule={handleOpenModal}
              key={index}
              item={item}
            />
          );
        })}
      </Grid>
    </div>
  );
}

export default Schedule;

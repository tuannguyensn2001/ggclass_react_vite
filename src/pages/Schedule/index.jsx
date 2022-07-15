import { Grid } from "@mui/material";
import { Fragment } from "react";
import { useState } from "react";


import ScheduleHeader from "~/components/ScheduleHeader";




import styles from './styles.module.css'
import ScheduleColTable from "~/components/ScheduleColTable";
const datas = [
  {
      text: 'Thứ 2',
      date:'19/7',
      children: [
          {
              time: '7:00',
              name: 'Học lập trình',
              number: '9/9'
          }
      ]
  },
  {
      text: 'Thứ 3',
      date:'19/7',
      children: [
          {
              time: '7:00',
              name: 'Học lập trình',
              number: '9/9'
          }
      ]
  },
  ,{
      text: 'Thứ 4',
      date:'19/7',
      children: [
          {
              time: '7:00',
              name: 'Học lập trình',
              number: '9/9'
          }
      ]
  }
  ,{
      text: 'Thứ 5',
      date:'19/7',
      children: [
          {
              time: '7:00',
              name: 'Học lập trình',
              number: '9/9'
          }
      ]
  }
  ,{
      text: 'Thứ 6',
      date:'19/7',
      children: [
          {
              time: '7:00',
              name: 'Học lập trình',
              number: '9/9'
          }
      ]
  }
  ,{
      text: 'Thứ 7',
      date:'19/7',
      children: [
          {
              time: '7:00',
              name: 'Học lập trình',
              number: '9/9'
          }, {
              time: '7:00',
              name: 'Học lập trình',
              number: '9/9'
          }
          , {
              time: '7:00',
              name: 'Học lập trình',
              number: '9/9'
          },
          {
              time: '7:00',
              name: 'Học lập trình',
              number: '9/9'
          },
          {
              time: '7:00',
              name: 'Học lập trình',
              number: '9/9'
          }
      ]
  }
  ,{
      text: 'Chủ nhật',
      date:'19/7',
      children: [
          
      ]
  }
]

    function Schedule() {
      
        return <div className={styles.wrap}>
          <ScheduleHeader/>
          <Grid container>
            {datas.map((item, index) => {
              return <ScheduleColTable key={index} item={item}/>
            })}
          </Grid>
        </div>;
    }

export default Schedule;

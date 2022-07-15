import { Grid } from "@mui/material";
import { Fragment } from "react";
import { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import ScheduleContentClassesItem from "~/components/ScheduleContentClassesItem";
import ScheduleHeader from "~/components/ScheduleHeader";
import ScheduletableHeaderItem from "~/components/ScheduletableHeaderItem";


import styles from './styles.module.css'
import ScheduleDetailclasses from "~/components/ScheduleDetailclasses";
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
      
        const [showModal,setShowModal] = useState(false);
        const handleOpenModal = ()=>{
          setShowModal(open);
        }
      

        return <div className={styles.wrap}>
          <ScheduleHeader/>
          <Grid container>
            {datas.map((item, index) => {
              return <div className={styles.col}>
                <ScheduletableHeaderItem  data={item}/>
                <div className={styles.col_wrap}>
                  {item.children && item.children.length >0 ? 
                    item.children.map((child,index) =>
                    <Tippy
                    interactive
                    offset={[73,-50]}
                    placement='right'
                    render={() => <ScheduleDetailclasses />}
                  >
                    <div>
                       <ScheduleContentClassesItem/>
                     </div>
                    </Tippy>
                    )
                    : 
                    <div className={styles.noClasses}>Không có lịch học</div>
                  }
                </div>
              </div>
            })}
          </Grid>
        </div>;
    }

export default Schedule;

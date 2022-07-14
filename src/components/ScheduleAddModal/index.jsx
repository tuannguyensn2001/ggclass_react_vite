import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LinkIcon from '@mui/icons-material/Link';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import styles from './styles.module.css'

export default function ScheduleAddModal({children}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [street,setStreet] = React.useState('offline');
  const [title,setTitle] = React.useState('Offline');
  const onClick = (e)=>{
    console.log(e.target)
    setStreet(e.target.name);
    setTitle(e.target.title);
    console.log('sau khi set street',street)
  }
  const iconLinks = [
    {
      link: 'https://shub.edu.vn/images/icons/schedule_offline.svg',
      name:'offline',
      title:'Offline'
    },
    {
      link: 'https://shub.edu.vn/images/icons/schedule_zoom_shub.svg',
      name:'shub',
      title:'Zoom trên Shub'
  },
    {
      link: 'https://shub.edu.vn/images/icons/schedule_google_meet.svg',
      name:'meet',
      title:'Google meet'
    },
    {
      link: 'https://shub.edu.vn/images/icons/schedule_ms_team.svg',
      name:'microsoft',
      title:'Microsoft Teams'
    },
    {
      link: 'https://shub.edu.vn/images/icons/schedule_facebook_livestream.svg',
      name:'facebook',
      title:'Facebook Live'
    
    },
    {
      link: 'https://shub.edu.vn/images/icons/schedule_zoom.svg',
      name:'zoom',
      title:'Zoom Pro'
    
    },
    {
      link: 'https://shub.edu.vn/images/icons/schedule_zavi.svg',
      name:'zavi',
      title:'Zavi'
    
    },
  ]
 
  console.log('street',street)

  return (
          <div>
            <div onClick={handleOpen}>
            {children}  
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className={styles.modal}>
                  <div className={styles.header}>
                    Tạo phòng học <span className={styles.title}>{title}</span>
                  </div>
                  <div className={styles.content}>
                    <div className={styles.list_icons}>
                      {iconLinks.map((item, index) => 
                        <div keu={index}  className={street === item.name ? `${styles.icon_wrap} ${styles.street}` : `${styles.icon_wrap}`}>
                          <img onClick={onClick} title={item.title}  name={item.name} src={item.link} className={styles.icon} alt='img'/>
                        </div>
                      )}
                    </div>
                    <TextField id="outlined-basic" label="Tên Buổi học" className={styles.input} variant="outlined" />
                    <div className={street !== 'offline' ? `${styles.link}` : `${styles.none}`}>
                      <label className={styles.label_link}>Thêm liên kết tại đây...</label>
                      <div className={styles.wrap_input_link}>
                        <div className={styles.icon_link}>
                          <LinkIcon sx={{fontSize: 21}}/>
                        </div>
                        <input className={styles.input_link} type="text" placeholder="Thêm liên kết tại đây..."/>
                      </div>
                    </div>
                    <div className={styles.time_set}>
                      <Button className={styles.date}>
                        <div className={styles.date_icon}>
                          <AccessTimeIcon sx={{color: '#202227',fontSize:21}}/>
                        </div>
                        <div className={styles.date_text}>
                          18 tháng 7
                        </div>
                      </Button>
                      <Button className={styles.time}>Bắt đầu lúc 7:00</Button>
                    </div>
                    <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel  id="demo-simple-select-label">Lặp lại</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Lặp Lại"
                onChange={handleChange}
              >
                <MenuItem value={10}>Không lặp lại</MenuItem>
                <MenuItem value={20}>Hằng ngày</MenuItem>
                <MenuItem value={30}>Hàng tuần vào thứ 4</MenuItem>
              </Select>
            </FormControl>
          </Box>
                  </div>
                  <div className={styles.actions}>
                    <Button className={styles.action_cancel}>Hủy</Button>
                    <Button className={styles.action_confirm} color="success">Xác nhận</Button>
                  </div>
                  
              </div>
              </Modal>
          </div>
  );
}

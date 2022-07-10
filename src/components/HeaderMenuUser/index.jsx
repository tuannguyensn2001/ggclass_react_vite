import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import styles from './styles.module.css';

const configs = [
  {
    text:'Thông tin cá nhân',
    icon:PersonIcon
  },
  {
    text:'Đăng xuất' ,
    icon:LogoutIcon
  }
]
export default function HeaderMenuUser( ) {

  return (
    <Paper className={styles.menu} sx={{ width: 320, maxWidth: '100%' }}>
        <MenuList>
          {configs.map((config,index)=>
          (
            <MenuItem>
              <ListItemIcon>
              <Avatar className={styles.user}>
                <config.icon className={styles.user_icon}/>
              </Avatar>
              </ListItemIcon>
              <ListItemText className={styles.text}>{config.text}</ListItemText>
           </MenuItem>
          )
          )}
        
        </MenuList>
    </Paper> 
  );
}
 
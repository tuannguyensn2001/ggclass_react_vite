import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import {useState} from 'react';

import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

import styles from './styles.module.css'

function HeaderMenuItem({data,onClick}) {
    console.log('data o item',data)
    return (
        <MenuItem onClick={onClick}>
        <ListItemIcon>
        <Avatar className={styles.user}>
            {data.icon && 
                <data.icon className={styles.user_icon}/>
            }
        </Avatar>
        </ListItemIcon>
        <ListItemText className={styles.text}>{data.title}</ListItemText>
     </MenuItem>
    );
}

export default HeaderMenuItem;
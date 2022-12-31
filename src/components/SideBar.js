import { AccountBox, Group, Home, ModeNight, Pages, Person, Settings, Storefront } from '@mui/icons-material'
import { Box, ListItem, List, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

export const SideBar = (props) => {
        const changeMode=()=>{
            if(props.mode==='light'){
                props.setMode('dark')
            }
            else{
                props.setMode('light')
            }
        
    }
  return (   
    <Box flex={1} p={2} sx={{display:{xs:"none",sm:'block'}}}>
        <Box position='fixed'>
        <List>
            <ListItem disablePadding>
                <ListItemButton component='a' href='#simple-list'>
                    <ListItemIcon>
                        <Home/>
                    </ListItemIcon>
                    <ListItemText primary='Homepage'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component='a' href='#simple-List'>
                    <ListItemIcon>
                        <Pages/>
                    </ListItemIcon>
                    <ListItemText primary='Pages'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component='a' href='#simple-list'>
                    <ListItemIcon>
                        <Group/>
                    </ListItemIcon>
                    <ListItemText primary='Groups'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component='a' href='#simple-list'>
                    <ListItemIcon>
                        <Storefront/>
                    </ListItemIcon>
                    <ListItemText primary='Marketplace'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component='a' href='#simple-list'>
                    <ListItemIcon>
                        <Person/>
                    </ListItemIcon>
                    <ListItemText primary='Friends'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component='a' href='#simple-list'>
                    <ListItemIcon>
                        <Settings/>
                    </ListItemIcon>
                    <ListItemText primary='Setting'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component='a' href='#simple-list'>
                    <ListItemIcon>
                        <AccountBox/>
                    </ListItemIcon>
                    <ListItemText primary='Profile'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component='a' >
                    <ListItemIcon>
                        <ModeNight/>
                    </ListItemIcon>
                    <Switch onClick={changeMode}/>
                </ListItemButton>
            </ListItem>
        </List>
        </Box>
    </Box >
  )
}

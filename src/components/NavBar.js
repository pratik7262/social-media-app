import { Mail, Notifications, Person } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React,{useState} from 'react'

const MyToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px'
})

const Search = styled(Box)(({ theme }) => ({
    backgroundColor: 'white',
    padding: '3px 10px',
    height: '20px',
    width: '40%',
    borderRadius: theme.shape.borderRadius
}))

const Icon = styled(Box)(({ theme }) => ({
    display: 'none',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up('sm')]: {
        display: 'flex'
    }
}))

const User = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    [theme.breakpoints.up('sm')]: {
        display: 'none'
    }
}))
export const NavBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position='sticky'>
            <MyToolbar>
                <Typography sx={{ display: { xs: 'none', sm: 'block' } }} variant='h6' >Play Fire</Typography>
                <Person sx={{ display: { xs: 'block', sm: 'none' }, width: '40px', height: '40px', p: '12px' }} />
                <Search><InputBase sx={{ p: 0, width: "100%", color:'black', height: '100%' }} placeholder='Search...' /></Search>
                <Icon>
                    <Badge badgeContent={6} color='error'>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={9} color='error'>
                        <Notifications />
                    </Badge>
                    <Avatar onClick={()=>{setOpen(true)}} sx={{ width: '35px', height: '35px' }}>PR</Avatar>
                </Icon>
                <User>
                    <Avatar onClick={()=>{setOpen(true)}} sx={{ width: '35px', height: '35px' }}>PR</Avatar>
                    <Typography variant='h6' component='span'>Pratik</Typography>
                </User>
            </MyToolbar>
            <Menu
                open={open}
                anchorOrigin={
                    {
                        vertical: "top",
                        horizontal: 'right'
                    }
                }
                transformOrigin={
                    {
                        vertical: "top",
                        horizontal: 'right'
                    }
                }
                onClose={
                    ()=>{setOpen(false)}
                }>
                <MenuItem onClick={()=>{
                    alert('Profile Clicked')
                }}>Profile</MenuItem>
                <MenuItem>My Account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

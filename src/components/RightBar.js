import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

export const RightBar = () => {
  const imgs = [
    'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://media.istockphoto.com/id/1388721067/photo/an-idyllic-and-romantic-sunset-light-envelops-the-bank-of-the-tiber-river-in-the-historic.jpg?b=1&s=170667a&w=0&k=20&c=soEKOidwAUCTR5OBgvZDf7nr6C1hcNGWmUu03L3d4hk=',
    'https://media.istockphoto.com/id/1347218684/photo/the-colors-of-autumn-in-a-basket-of-sweet-chestnuts-still-in-their-hedgehog.jpg?b=1&s=170667a&w=0&k=20&c=B2Reya6fnbmPS7Ao-wbyS0DZVQ_PvHfoy02Epa-fgco=',
    'https://media.istockphoto.com/id/1423264203/photo/amazing-nature-at-glass-house-mountain.jpg?b=1&s=170667a&w=0&k=20&c=-uvIrZz4wOJhiOptjWbd46E-ZwfhnOvf23vYSNNAbnw=',
    'https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  ]
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: 'block' } }} >
      <Box  position='fixed'width={300}>
        <Typography mb={2} variant='h6'>Online Friends</Typography>

        <AvatarGroup max={4} sx={{ display: 'flex', justifyContent: 'center' }} >
          <Avatar >MS</Avatar>
          <Avatar >AM</Avatar>
          <Avatar >PS</Avatar>
          <Avatar >PM</Avatar>
          <Avatar >SM</Avatar>
          <Avatar >MS</Avatar>
          <Avatar >SF</Avatar>
          <Avatar >VB</Avatar>
        </AvatarGroup>

        <Typography mt={2} variant='h6'>Lates Post</Typography>
        <ImageList height={300} width={500} gap={5} cols={3} rowHeight={100}>

          {

            imgs.map((item) => {
              return <ImageListItem>
                <img src={item} alt='img' />
              </ImageListItem>
            }
            )

          }
        </ImageList>
        <Typography mt={2}  variant='h6'>Lates Conversations</Typography>
        
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
        </Box>
      </Box>
    
  )
}

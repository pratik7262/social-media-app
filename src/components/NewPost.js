import React, { useState } from 'react'
import { Tooltip, Fab, Modal, Box, styled, Typography, TextField, Avatar, Stack, ButtonGroup, Button } from "@mui/material";
import { Add, DateRange, EmojiEmotions, InsertPhoto, PersonAdd, VideoCameraBack } from '@mui/icons-material';



const NewModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const User = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
}))

export const NewPost = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip title="Add New Post" onClick={(e) => { setOpen(true) }} sx={{ position: 'fixed', bottom: 20, left: 20 }}>
        <Fab color='primary'>
          <Add />
        </Fab>
      </Tooltip>
      <NewModal
        open={open}
        onClose={(e) => { setOpen(false) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box color={'text.primary'} bgcolor={'background.default'} sx={{ width: 400, height: 280, borderRadius: '10px', p: 3 }}>
          <Typography variant='h6' textAlign='center'>Create Post</Typography>
          <User>
            <Avatar onClick={() => { setOpen(true) }} sx={{ width: '30px', height: '30px' }}>PR</Avatar>
            <Typography variant='h6' fontWeight={500} component='span'>Pratik</Typography>
          </User>
          <TextField
            sx={{ width: '100%', marginTop: 3 }}
            multiline
            rows={3}
            placeholder="Whats In Your Mind???"
            variant="standard"
          />
          <Stack direction='row' spacing={1} mt={2} mb={2}>
            <EmojiEmotions color='primary' />
            <InsertPhoto color='secondary' />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
          </Stack>
          <ButtonGroup fullWidth sx={{marginTop:'10px'}} variant="contained" aria-label="outlined primary button group">
            <Button onClick={()=>{setOpen(false)}}>Post</Button>
            <Button sx={{width:'100px'}}><DateRange/></Button>
          </ButtonGroup>
        </Box>
      </NewModal>
    </>
  )
}

import { Box } from '@mui/material'
import React from 'react'
import { Posts } from './Posts'

export const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Posts img='https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
      <Posts img='https://media.istockphoto.com/id/1388721067/photo/an-idyllic-and-romantic-sunset-light-envelops-the-bank-of-the-tiber-river-in-the-historic.jpg?b=1&s=170667a&w=0&k=20&c=soEKOidwAUCTR5OBgvZDf7nr6C1hcNGWmUu03L3d4hk=' />
      <Posts img='https://media.istockphoto.com/id/1347218684/photo/the-colors-of-autumn-in-a-basket-of-sweet-chestnuts-still-in-their-hedgehog.jpg?b=1&s=170667a&w=0&k=20&c=B2Reya6fnbmPS7Ao-wbyS0DZVQ_PvHfoy02Epa-fgco=' />
      <Posts img='https://media.istockphoto.com/id/1423264203/photo/amazing-nature-at-glass-house-mountain.jpg?b=1&s=170667a&w=0&k=20&c=-uvIrZz4wOJhiOptjWbd46E-ZwfhnOvf23vYSNNAbnw=' />
      <Posts img='https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
    </Box>
  )
}

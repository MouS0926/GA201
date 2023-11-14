import { Box, Container, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const isAuth=useSelector(store=>store.authReducer.isAuth)
    const current_user=useSelector(store=>store.authReducer.currentuser)

  return (
    <Container maxW='100%' bg='blue.600' color='white'>
    <Stack direction={['column', 'row']} spacing='24px'>
        <Link to="/">Home</Link>
        {
            isAuth?
            <Link to="">Logout</Link>
            :
            <Link to="/login">Login</Link>
        }
        {
            isAuth?
            <Text>{current_user.name}</Text>
            :
            <Link to="/signup">Sign Up</Link>
        }
        {
            isAuth?
            <Link to="/signup">My Bookings</Link>
            :
            ""
        }
       
</Stack>
  </Container>
  )
}

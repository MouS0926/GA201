import { Box, Button, Container, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LOGOUT } from '../Redux/actionType'

export default function Navbar() {
    const isAuth=useSelector(store=>store.authReducer.isAuth)
    const current_user=useSelector(store=>store.authReducer.currentuser)
  const dispatch=useDispatch()

const handleLogout=()=>{
  dispatch({type:LOGOUT})
}

  return (
    <Container maxW='100%' bg='blue.600' color='white'>
    <Stack direction={['column', 'row']} spacing='24px'>
        <Link to="/">Home</Link>
        {
            isAuth?
            
            <Button colorScheme='teal' size='sm' onClick={handleLogout}>
             Logout
            </Button>
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
            <Link to="/bookings">My Bookings</Link>
            :
            ""
        }
       
</Stack>
  </Container>
  )
}

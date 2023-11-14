import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
 Stack,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import axios from 'axios'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../Redux/Authredux/authAction'
import Alert from './Alert'

export default function Register() {

    const [name,setName]=useState("")
   const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
   const [isAlert,setAlert]=useState(false)
   const dispatch = useDispatch();

const handleRegister=(e)=>{
    e.preventDefault()
    

    axios.get(`http://localhost:3001/users`)
    .then((res)=>{
        let isExist=res.data.some((el)=>el.email==email)
        console.log(isExist);
        if(isExist)
        {
            alert("user already exist")
        }
        else{
            
            let newUser={
                name,email,password
            }
            dispatch(registerUser(newUser))
        }
    })

}

  return (
    
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>

{/* {setAlert && <Alert/>} */}

      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign Up</Heading>
         
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>

                <form action="" onSubmit={handleRegister}>
                    <FormControl id="name">
                        <FormLabel>Name</FormLabel>
                        <Input type="text" value={name} 
                        onChange={(e)=>setName(e.target.value)} />

                    </FormControl>

                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" value={email} 
                        onChange={(e)=>setEmail(e.target.value)}/>
                    </FormControl>

                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" value={password} 
                        onChange={(e)=>setPassword(e.target.value)}/>
                    </FormControl>

           
             
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                        bg: 'blue.500',
                         }}
                         type={"submit"}
                         >
                        Sign in
                    </Button>

                </form>
         
           
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
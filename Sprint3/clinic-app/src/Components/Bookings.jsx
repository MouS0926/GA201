import axios from 'axios'
import  { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Card, CardHeader, CardBody, CardFooter, Text, Button, Heading, SimpleGrid, Container } from '@chakra-ui/react'
export default function Bookings() {

  const [bookings,setBookings]=useState([])
  const cuser=useSelector(store=>store.authReducer.currentuser)

  useEffect(()=>{
    axios.get(`http://localhost:3001/appointments`)
    .then((res)=>{
      let myBookings=res.data.filter((el)=>el.patientId==cuser.id)
      setBookings(myBookings)
      // console.log(myBookings);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])


  return (
    <div>

<Container maxW='90%' bg='whitealpha.600' color='white'>
<SimpleGrid spacing={4} templateColumns='repeat(4,1fr)'>

  {
    bookings ? bookings.map((el)=>(
      <>
      <Card key={el.id}>
        <CardHeader>
          <Heading size='md'> Doctor Name</Heading>
        </CardHeader>
        <CardBody>
          <Text>{el.time}</Text>
        </CardBody>
        <CardFooter>
          <Button>{el.day}</Button>
        </CardFooter>
    </Card>
    </>
    ))
    :
    <Heading as='h3' size='lg'>
    No Booking Yet
  </Heading>

  }
 

</SimpleGrid>
</Container>
    </div>
  )
}

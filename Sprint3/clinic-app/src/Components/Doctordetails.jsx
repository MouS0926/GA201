import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Container,Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { bookAppointment } from '../Redux/bookingRedux/bookAction'

export default function Doctordetails() {
    const {id}=useParams()
    const [doctor,setDoctor]=useState({})
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [isSeleted,setIsSeletcted]=useState(false)
    const dispatch=useDispatch()
    const cuser=useSelector(store=>store.authReducer.currentuser)
    console.log(cuser);

useEffect(()=>{
    axios.get(`http://localhost:3001/doctors/${id}`)
    .then((res)=>{
        setDoctor(res.data)
    })
    .catch((err)=>{
        console.log(err);
    })
},[id])

const handleSeletecSlot=(time,day)=>{
  setIsSeletcted(true)
  setSelectedSlot({ time: Object.keys(time)[0], day })
 
}
const handleBookAppoinment=(ptName,userid)=>{
let newAppoinment={...selectedSlot,
 doctorId: id,
 patientName: ptName,
 
  status: false,
  patientId: userid
}

  dispatch(bookAppointment(newAppoinment))
}

console.log(selectedSlot);
  return (
    <div>

         <Container maxW='98%' bg='' color='white'>
         <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='contain'
    maxW={{ base: '100%', sm: '200px',md:'100%' }}
    src={`../Images/${doctor.img}`}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{doctor.name}</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
      <Text>
        {doctor.rate}
      </Text>
      <Heading size='md'>Book your Slots</Heading>

      <Tabs isManual variant='enclosed'>


        <TabList>

        {
   doctor.availability && Object.keys(doctor.availability).map((day)=>(
        <div key={day}>
            <Tab>{day}</Tab>
        </div>
    ))

   

}
</TabList>

        <TabPanels>
          
           
 {doctor.availability && Object.keys(doctor.availability).map((day, index) => (
      <TabPanel key={index}>
       
          {doctor.availability[day] && doctor.availability[day].map((time, timeIndex) => (
            <Button key={timeIndex} 

            variant={
              isSeleted && selectedSlot.time === Object.keys(time)[0] && selectedSlot.day == day?'solid':'outline'
            }  

            onClick={()=>handleSeletecSlot(time,day)}
            

            isDisabled={!time[Object.keys(time)[0]]}  colorScheme='teal' size='sm' m={1}>
              {Object.keys(time)[0]}
            </Button> 
          ))}
        
      </TabPanel>
    ))} 


           
          
        </TabPanels>
    </Tabs>

    </CardBody>

    <CardFooter>
      {
        isSeleted?
      <Button variant='solid' colorScheme='blue' onClick={()=>handleBookAppoinment(cuser.name,cuser.id)}>
        Book Slots
      </Button>
      :
      ''
      }
      
    </CardFooter>
  </Stack>
</Card>
        </Container>
        
    </div>
  )
}

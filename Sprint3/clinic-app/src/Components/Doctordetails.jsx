import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Container,Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import axios from 'axios'

export default function Doctordetails() {
    const {id}=useParams()
    const [doctor,setDoctor]=useState({})

useEffect(()=>{
    axios.get(`http://localhost:3001/doctors/${id}`)
    .then((res)=>{
        setDoctor(res.data)
    })
    .catch((err)=>{
        console.log(err);
    })
},[id])

console.log(doctor);

  return (
    <div>

         <Container maxW='98%' bg='' color='white'>
         <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
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
            <Button key={timeIndex} variant='outline'  colorScheme='teal' size='sm' m={1}>
              {time}
            </Button> 
          ))}
        
      </TabPanel>
    ))} 


           
          
        </TabPanels>
    </Tabs>

    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card>
        </Container>
        
    </div>
  )
}

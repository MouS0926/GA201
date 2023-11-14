import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container,Card, CardBody, CardFooter, Text, Stack, Heading, Divider, ButtonGroup, Button, Grid, GridItem, Spinner } from '@chakra-ui/react'
import { getclinicAction } from '../Redux/ClinicRedux/clinicActions'
import { Link } from 'react-router-dom'


export default function Clinic() {

  const isLoading=useSelector(store=>store.clinicReducer.isLoading)
  const allclinics=useSelector(store=>store.clinicReducer.clinics)

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getclinicAction)
    },[])

    console.log(allclinics);
  return (
    <div>
        <Container maxW='90%'  color='white' p={4} >

{isLoading && <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>}

        <Grid templateColumns='repeat(4, 1fr)' gap={6}>


        {
   allclinics && allclinics.map((el)=>(
        <div key={el.id}>
       <GridItem w='100%'  bg=''>
  <Card maxW='sm'>
  <CardBody bg="teal.100">
   
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{el.name}</Heading>
      <Text>
        {el.location}
      </Text>
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter bg="teal.50">
    <ButtonGroup spacing='2'>
        <Link to={`/doctors/${el.id}`}>
        <Button variant='solid' colorScheme='blue' size='sm' >
        View
      </Button>
        </Link>
      
      
    </ButtonGroup>
  </CardFooter>
</Card>
    </GridItem>
        </div>
        
    ))
}


 
 
</Grid>


        </Container>

    </div>
  )
}

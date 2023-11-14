import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getdoctorsAction } from '../Redux/DoctorRedux/doctorsActions'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Container, Divider, Grid, GridItem, Heading, Image, Spinner, Stack, Text } from '@chakra-ui/react'
import { getspecAction } from '../Redux/specilityRedux/specActions'

export default function Doctorlist() {

    const {id}=useParams()
    const isLoading=useSelector(store=>store.doctorsReducer.isLoading)
    const allclinics=useSelector(store=>store.clinicReducer.clinics)
    const alldoctors=useSelector(store=>store.doctorsReducer.doctors)
    const allspeciality=useSelector(store=>store.specReducer.speciality)

    const filteredDoctors=alldoctors.filter((el)=>el.clinicId==id)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getdoctorsAction)
        dispatch(getspecAction)
    },[])

    //console.log(allspeciality);

  return (

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
    filteredDoctors && filteredDoctors.map((el)=>(
    <div key={el.id}>
    <GridItem w='100%'  bg=''>



<Card maxW='sm' bg='gray.50'>
  <CardBody>
    <Image
      src={`../Images/${el.img}`}
      alt='Green double couch with wooden legs'
      maxW="100%"
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{el.name}</Heading>
      <Text>
        {el.address}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹ {el.rate}
      </Text>

      <Text color='blue.600' fontSize='2xl'>
     {allspeciality.find((spec) => spec.id == el.specialtyId)?.name}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>

<Link to={`/doctors-details/${el.id}`}>
    
    <Button variant='solid' colorScheme='blue'>
        View Details
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

  )
}

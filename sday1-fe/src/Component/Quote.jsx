import React, { useState } from 'react'
import axios from "axios"
import { Box, Button, Container, FormLabel, Input } from '@chakra-ui/react';

export default function Quote() {
    const [keyword,setkeyword]=useState("")
    const [isLoading,setLoading]=useState(false)
    const [quote,setQuote]=useState("")

const handlegeneratequote=()=>{
    setLoading(true);
    axios.post(`http://localhost:8080/gen-quote`, { keyword })
    .then((res)=>{
        setLoading(false);
        setQuote(res.data.quote)
        console.log(res);
    })
.catch((err)=>{
    console.log(err);
})
}

  return (
    <div>
        <Container maxW='90%'>
      <Box bg='' w='70%' p={4} color='white'>
            <form>
                
                <Input type='email' placeholder='Enter your keyword' value={keyword} 
                onChange={(e)=>setkeyword(e.target.value)}
                />
                <Button  colorScheme='teal' size='sm' onClick={handlegeneratequote}>
                   { isLoading?"Generating quote.....":"Generate"}
                </Button>

                Quote:{
                    quote
                }
            </form>
    </Box>
  </Container>

    </div>
  )
}

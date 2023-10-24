import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';

export default function Quote() {
  const [keyword, setKeyword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [quote, setQuote] = useState('');

  const handleGenerateQuote = () => {
    setLoading(true);
    axios
      .post(`https://quote-generator-api.onrender.com/gen-quote`, { keyword })
      .then((res) => {
        setLoading(false);
        setQuote(res.data.quote);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container maxW="70%" centerContent>
      <Heading as='h3' size='lg' color="white">
    Quotes Generator
  </Heading>
      <br/>
      <Box
        p={4}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="md"
        bg="#2e2d2d"
        w="100%"
        color="white"
      >
        <form >
          <FormLabel htmlFor="keyword">Enter your keyword:</FormLabel>
          <Input
            id="keyword"
            type="text"
            placeholder="e.g., inspiration"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={isLoading}
            loadingText="Generating quote..."
            onClick={handleGenerateQuote}
          >
            Generate
          </Button>
          {quote && (
            <Box mt={4}>
              <Text fontSize="lg" fontWeight="bold">
                Quote:
              </Text>
              <Text>{quote}</Text>
            </Box>
          )}
        </form>
      </Box>
    </Container>
  );
}

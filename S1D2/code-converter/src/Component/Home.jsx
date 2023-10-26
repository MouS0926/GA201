import { Box, Button, Container, Flex, HStack, Heading, Select } from '@chakra-ui/react';
import axios from "axios"
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';


import { useState } from 'react';

export default function Home() {
  const [code, setCode] = useState('');
  const [fromlanguage, setfromLanguage] = useState('');
  const [tolanguage, settoLanguage] = useState('');
    const [isLoadingConvert,setLoadingConvert]=useState(false)
    const [isLoadingDebugger,setLoadingDebugger]=useState(false)
    const [isLoadingChecker,setLoadingChecker]=useState(false)


    const [convertedCode,setConvertedcode]=useState("")
    const [debuggedCode,setdebuggededcode]=useState("")
    const [qualityFeedback,setFeedback]=useState("")
 

    const [activeView, setActiveView] = useState('converted');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

//   console.log(code);


const handleConverter=()=>{
    setLoadingConvert(true)
    axios.post("https://convert-debugger-checker-api.onrender.com/convert",{code,targetedlanguage:tolanguage})
    .then((res)=>{
        setLoadingConvert(false)
        console.log(res.data);
        setConvertedcode(res.data)
        setActiveView('converted')
        // console.log(res.data.summary);
    })
    .catch((err)=>{
        console.log(err);
    })
}


const handleDebugger=()=>{
    setLoadingDebugger(true)
    axios.post("https://convert-debugger-checker-api.onrender.com/debugger",{code})
    .then((res)=>{
        setLoadingDebugger(false)
        console.log(res.data);
        setdebuggededcode(res.data)
        setActiveView('debugged')
        // console.log(res.data.summary);
    })
    .catch((err)=>{
        console.log(err);
    })
}
//http://localhost:8080/quality
const handleQaulityCheck=()=>{
    setLoadingChecker(true)
    axios.post("https://convert-debugger-checker-api.onrender.com/quality",{code})
    .then((res)=>{
        setLoadingChecker(false)
        console.log(res.data);
        setFeedback(res.data)
        setActiveView('quality')
        // console.log(res.data.summary);
    })
    .catch((err)=>{
        console.log(err);
    })
}

  return (
    <Container maxW='' bg='#07041b' color='grey' p={4}>
        <Heading as='h3' size='lg' color="white" bg="#3acbb7" textAlign="Center" p={1}>
        CodeWiz
  </Heading>
      <HStack spacing={['4', '24px']} flexWrap="wrap" p={3} direction={['column', 'row']}>
        <Select
          placeholder="From Language"
          width="25%"
          value={fromlanguage}
          onChange={(e) => setfromLanguage(e.target.value)}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="c_cpp">C/C++</option>
          <option value="java">Java</option>
          <option value="php">PHP</option>
        </Select>

        <Select
          placeholder="To Language"
          width="25%"
          value={tolanguage}
          onChange={(e) => settoLanguage(e.target.value)}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="c_cpp">C/C++</option>
          <option value="java">Java</option>
          <option value="php">PHP</option>
        </Select>
        <Button colorScheme="blue" onClick={handleConverter} 
        isLoading={isLoadingConvert} 
        loadingText="Converting..."
        >Convert</Button>
        <Button colorScheme="blue" onClick={handleDebugger}
        isLoading={isLoadingDebugger} 
        loadingText="Debugging..."
        >Debugger</Button>
        <Button colorScheme="blue" onClick={handleQaulityCheck}
        isLoading={isLoadingChecker} 
        loadingText="Checking...."
        >Quality Checker</Button>
      </HStack>

      <Flex justify="space-between" p={3} direction={['column', 'row']}>
        <Box bg="black" width={['100%', '50%']} p={4} color="white">
          <AceEditor
            mode={fromlanguage}
            theme="monokai"
            value={code}
            onChange={handleCodeChange}
            name="code-editor"
            editorProps={{ $blockScrolling: Infinity }}
            width="100%"
            height="600px"
          />
        </Box>
            <Box bg="black" width={['100%', '50%']} p={4} color="white">

            <Box bg="#2e2e2e" width="100%" p={1} color="white" height="100%" overflow="auto">
            <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', maxWidth: '100%', overflowWrap: 'break-word'}}>
            {activeView === 'converted' && (
            <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', maxWidth: '100%', overflowWrap: 'break-word' }}>
              {convertedCode}
            </pre>
          )}
          {activeView === 'debugged' && (
            <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', maxWidth: '100%', overflowWrap: 'break-word' }}>
              {debuggedCode}
            </pre>
          )}
          {activeView === 'quality' && (
            <div>
              <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', maxWidth: '100%', overflowWrap: 'break-word' }}>
              {qualityFeedback}
            </pre>
            </div>
          )}

            

            </pre>
            </Box>
        </Box>
      </Flex>
    </Container>
  );
}

import React, { useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue, Container, Textarea, Button, Box, useClipboard, Grid, GridItem  } from '@chakra-ui/react'
import axios from 'axios'
import languageData from "./language.json"
import Select from 'react-select'

export default function Summarizer() {

    const colors = useColorModeValue(
        ['blue.900', 'blue.900', 'blue.900'],
        ['white.30', 'white.30', 'white.30'],
      )

    const [tabIndex, setTabIndex] = useState(0)
    const [summarizedText,setSumarized]=useState("")
    const [isLoading,setLoading]=useState(false)
    const [language,setLanguage]=useState("")
    const [translatedText,setTranslatedtext]=useState("")
    const [generatedText,setGeneratedtext]=useState("")

    const [recognizedEmotion, setRecognizedEmotion] = useState("");
const { hasCopiedEmotion, onCopyEmotion } = useClipboard(recognizedEmotion);


    // console.log(language);
    const { hasCopied, onCopy } = useClipboard(summarizedText);
    const { hasCopiedtranslated, onCopyTranslated } = useClipboard(translatedText);
    const bg = colors[tabIndex]


    const [text,setText]=useState("")
    const handleSummarize=()=>{
        setLoading(true)
        axios.post("http://localhost:8080/summarize",{text})
        .then((res)=>{
            setLoading(false)
            setSumarized(res.data.summary)
            // console.log(res.data.summary);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

   
const handleTranslate=()=>{
    setLoading(true)
    axios.post("http://localhost:8080/translate",{text,language:language.value})
    .then((res)=>{
        setLoading(false)
        setTranslatedtext(res.data.summary)
        
        // console.log(res.data.summary);
    })
    .catch((err)=>{
        console.log(err);
    })
}

const handleGenerateText=()=>{
    setLoading(true)
    axios.post("http://localhost:8080/generate",{text})
    .then((res)=>{
        setLoading(false)
        setGeneratedtext(res.data.generated)
        
        console.log(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}


const handleEmotionRecognition = () => {
    setLoading(true);
    axios.post("http://localhost:8080/emotion", { text })
      .then((res) => {
        setLoading(false);
        setRecognizedEmotion(res.data.resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <div>

<Container maxW='container.md'  color='' pt={4}>
<Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
      <TabList color="white">
      <Tab> Text Generator</Tab>
        <Tab>Summarizer</Tab>
        <Tab>Translator</Tab>
        <Tab>Emotion Analyze</Tab>
       
      </TabList>

      <TabPanels p='2rem'>

                        <TabPanel>
                        <Textarea bg="white" placeholder='Enter your text here' value={text} 
                            onChange={(e) => setText(e.target.value)} />
                            <br /><br />
                            <Button colorScheme='teal' size='sm' onClick={handleGenerateText} 
                            isLoading={isLoading} 
                            loadingText="Generating Content...."
                            >
                                Generate
                            </Button>
                            &nbsp;
                            <Button colorScheme='teal' size='sm' onClick={()=>setText("")} >
                                Clear
                            </Button>
                                <br/><br/>
                            {
                                generatedText &&
                                <Box bg='tomato' w='100%' p={4} color='white'>
                                    {generatedText}
                                </Box>
                            }
                            <br/>
                            {generatedText &&
                                <Button colorScheme='teal' size='sm' onClick={onCopy}>
                                    {hasCopied ? 'Copied!' : 'Copy to Clipboard'}
                                </Button>
                            }

                        </TabPanel>


                        <TabPanel>
                            <Textarea bg="white" placeholder='Enter your text here' value={text} 
                            onChange={(e) => setText(e.target.value)} />
                            <br /><br />
                            <Button colorScheme='teal' size='sm' onClick={handleSummarize} 
                            isLoading={isLoading} 
                            loadingText="Summarizing text"
                            >
                                summarize
                            </Button>
&nbsp;
                            <Button colorScheme='teal' size='sm' onClick={()=>setText("")} >
                                Clear
                            </Button>
<br/><br/>
                            {
                                summarizedText &&
                                <Box bg='tomato' w='100%' p={4} color='white'>
                                    {summarizedText}
                                </Box>
                            }
<br/>
                            {summarizedText &&
                                <Button colorScheme='teal' size='sm' onClick={onCopy}>
                                    {hasCopied ? 'Copied!' : 'Copy to Clipboard'}
                                </Button>
                            }
                        </TabPanel>

                        <TabPanel>

  
            <Textarea bg="white" placeholder='Enter your text here' value={text} 
                            onChange={(e) => setText(e.target.value)} />

                        
<br/><br/>
Translate into:
                        <Select id="language-select" name="language" options={languageData} value={language} 
                        onChange={(language)=>setLanguage(language)} />
<br/>
                        <Button colorScheme='teal' size='sm' onClick={handleTranslate}
                         isLoading={isLoading} 
                         loadingText="Translating text..."
                        >
                            
                               Translate
                            </Button> &nbsp;
                            <Button colorScheme='teal' size='sm' onClick={()=>setText("")} >
                                Clear
                            </Button>
                            <br/><br/>
                            {
                                translatedText &&
                                <Box bg='tomato' w='100%' p={4} color='white'>
                                    {translatedText}
                                </Box>
                            }
<br/>
                            {translatedText &&
                                <Button colorScheme='teal' size='sm' onClick={onCopyTranslated}>
                                    {hasCopiedtranslated ? 'Copied!' : 'Copy to Clipboard'}
                                </Button>
                            }
                    </TabPanel>


                    <TabPanel>
  <Textarea bg="white" placeholder='Enter your text here' value={text} onChange={(e) => setText(e.target.value)} />
  <br /><br />
  <Button
    colorScheme='teal'
    size='sm'
    onClick={handleEmotionRecognition}
    isLoading={isLoading}
    loadingText="Recognizing Emotion..."
  >
    Recognize Emotion
  </Button>
  &nbsp;
  <Button colorScheme='teal' size='sm' onClick={() => setText("")}>
    Clear
  </Button>
  <br /><br />
  {recognizedEmotion &&
    <Box bg='tomato' w='100%' p={4} color='white'>
      {recognizedEmotion}
    </Box>
  }
  <br />
  {recognizedEmotion &&
    <Button colorScheme='teal' size='sm' onClick={onCopyEmotion}>
      {hasCopiedEmotion ? 'Copied!' : 'Copy to Clipboard'}
    </Button>
  }
</TabPanel>



        
                    </TabPanels>

    </Tabs>
  </Container>




    </div>
  )
}

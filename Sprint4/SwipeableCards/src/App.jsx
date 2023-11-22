import { useEffect, useState } from 'react';
import './App.css'
import SwipeableCards from './Components/SwipeableCards'
import axios from "axios"

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://gist.githubusercontent.com/anishbajpai014/d482191cb4fff429333c5ec64b38c197/raw/b11f56c3177a9ddc6649288c80a004e7df41e3b9/HiringTask.json');
        // Extract content from JSON response
        
        const content = response.data.substring(1); // remove the leading '/'
 
        const parsedData = JSON.parse(content);
        setData(parsedData.data);
        console.log(parsedData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
   <SwipeableCards data={data}/>
    
    </>
  )
}

export default App

/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import SwipeableViews from 'react-swipeable-views';

import "./SwipeableCards.css"

export default function SwipeableCards({data}) {
    const [index, setIndex] = useState(0);
   
    const handleSwipe = (index) => {
        // Handle swipe event
        setIndex(index);
      };

     const handleReset=()=>{
        setIndex(0)
     }

  return (
    <div>

<div className="swipeable-cards">

         <SwipeableViews index={index} onChangeIndex={handleSwipe}>
       
         

{data.map((card, i) => (
    <div key={i} className="card">
      <div > {card.id}</div>
      <div>{card.text}</div>
    </div>
  ))}




       
      </SwipeableViews>

<button onClick={handleReset}>reset</button>
      <div  className="progress">
        Card #{index + 1} out of {data.length}
      </div>
      </div>
    </div>
  )
}

import React from 'react'
import { useSelector } from 'react-redux';
import "./Allnotes.css"
export default function AllNotes() {
    const notes = useSelector((store) => store.formReducer.notes);
    
  return (
    <div>

   <div className="row">
    <h2>All Notes</h2>
    {
      
      notes
      .sort((a, b) => b.timestamp - a.timestamp)
      .map((el)=>(
        
          <div className="col-md-12 card" key={el.id}>
              <h5>⏲️ {el.timestamp.toString()}</h5>
              <p><b>{el.title}</b></p>
              <p>{el.content}</p>
          </div>
      ))
    }
         
        
   </div>
       
    


    </div>
  )
}

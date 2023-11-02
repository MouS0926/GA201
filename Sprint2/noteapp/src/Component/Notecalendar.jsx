import  { useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import { useDispatch, useSelector } from 'react-redux';
import { addNotesAction } from '../Redux/Formredux/action';
import "./Notecalendar.css"
export default function Notecalendar() {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [title, setTitle] = useState(''); // Line to use useState
  const [content, setContent] = useState(''); // Line to use useState
  const [isFormVisible, setFormVisible] = useState(false); // Line to use useState
  const dispatch = useDispatch();
  const notes = useSelector((store) => store.formReducer.notes);


  const handleDateChange = (date) => {
    if (date <= new Date()) {
      return;
    }
   
    setSelectedDate(date);
    setFormVisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newnote = {
      title,
      content,
      timestamp: selectedDate,
    };

   
    dispatch(addNotesAction(newnote));

    setTitle(''); // Line to use useState
    setContent(''); // Line to use useState
    setFormVisible(false); // Line to use useState
  };

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);
  return (
    <div>

<Calendar
        value={selectedDate}
        onChange={handleDateChange}
        minDate={new Date(new Date().setHours(0, 0, 0, 0))} // Prevent selection of past dates
    className="calendarStyles "
    />



      
            {
                isFormVisible && 
                <form action="" onSubmit={handleSubmit} className="form-container">
                  <h2>Add Note</h2>
                <input type="text" name="" placeholder='Enter title....' value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <textarea name="" id="" cols="30" rows="5" placeholder='Enter details...'  value={content}
                onChange={(e)=>setContent(e.target.value)}></textarea>

                <button type="submit" className="form-button">Add</button>
            </form>
            }
    

    </div>
  )
}

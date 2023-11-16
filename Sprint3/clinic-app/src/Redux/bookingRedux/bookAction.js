import axios from "axios";
import { BOOK_APPOINTMENT_FAIL, BOOK_APPOINTMENT_REQ, BOOK_APPOINTMENT_SUCCESS } from "../actionType";

export const bookAppointment = (appointmentData) => (dispatch) => {
    dispatch({ type: BOOK_APPOINTMENT_REQ });
  
   
  
    axios
      .post('http://localhost:3001/appointments', appointmentData)
      .then((response) => {
        dispatch({
          type: BOOK_APPOINTMENT_SUCCESS,
          payload: response.data,
        });
  
        alert("booking successfull")
      })
      .catch((error) => {
        dispatch({
          type: BOOK_APPOINTMENT_FAIL,
          payload: error.message,
        });
        
      });
  };
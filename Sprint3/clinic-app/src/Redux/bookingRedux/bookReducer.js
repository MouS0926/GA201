

import { BOOK_APPOINTMENT_FAIL, BOOK_APPOINTMENT_REQ, BOOK_APPOINTMENT_SUCCESS } from "../actionType";

  
  const initialState = {
    isBooking: false,
    bookingError: null,
    appointments:[]
  };
  
  const bookingReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case BOOK_APPOINTMENT_REQ:
        return {
          ...state,
          isBooking: true,
          bookingError: null,
        };
      case BOOK_APPOINTMENT_SUCCESS:
        return {
          ...state,
          isBooking: false,
          appointments:payload
        };
      case BOOK_APPOINTMENT_FAIL:
        return {
          ...state,
          isBooking: false,
          bookingError: payload,
        };
      
      default:
        return state;
    }
  };
  
  export default bookingReducer;
  
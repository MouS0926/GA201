// registrationReducer.js

import { REGISTER_FAIL, REGISTER_REQ, REGISTER_SUCCEESS } from "../actionType";

const initialState = {
    isFetching: false,
    isErr:false,
    users:[],
    error: null,
    
   
  };
  
  const registrationReducer = (state = initialState, {type,payload}) => {
    switch (type) {
      case REGISTER_REQ:
        return {
          ...state,
          isFetching: true,
          error: null,
        };
      case REGISTER_SUCCEESS:
        return {
          ...state,
          isFetching: false,
           users:[... state.users,payload]
          // Update state with successful registration data
        };
      case REGISTER_FAIL:
        return {
          ...state,
          isFetching: false,
          error: payload,
        };
      // other cases if needed
      default:
        return state;
    }
  };
  
  export default registrationReducer;
  
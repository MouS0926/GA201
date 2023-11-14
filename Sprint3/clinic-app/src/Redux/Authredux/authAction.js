import axios from "axios";
import { REGISTER_FAIL, REGISTER_REQ, REGISTER_SUCCEESS } from "../actionType";

export const registerUser = (userData) => (dispatch) => {
    dispatch({ type: REGISTER_REQ });
  
    axios
      .post('http://localhost:3001/users', userData)
      .then((response) => {
        dispatch({
          type: REGISTER_SUCCEESS,
          payload: response.data, // Assuming the API returns user data upon successful registration
        });
        alert("Registered successfully")
      })
      .catch((error) => {
        dispatch({
          type: REGISTER_FAIL,
          payload: error.message,
        });
      });
  };

  export const loginAction=()=>{
    //complete 
  }
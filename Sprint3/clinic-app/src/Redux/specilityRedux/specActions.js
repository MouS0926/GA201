
import axios from "axios"
import { SPECIALITY_FAIL, SPECIALITY_GET_SUCCEESS, SPECIALITY_REQ } from "../actionType"

export const getspecAction=(dispatch)=>{

    dispatch({type:SPECIALITY_REQ})

    axios.get(`http://localhost:3001/specialties`)
    .then((res)=>{
        dispatch({type:SPECIALITY_GET_SUCCEESS,payload:res.data})
        // console.log(res.data);
    })
    .catch((err)=>{
        dispatch({type:SPECIALITY_FAIL,payload:err})
    })


}
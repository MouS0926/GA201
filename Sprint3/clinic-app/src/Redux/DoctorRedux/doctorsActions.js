import { DOCTOR_FAIL, DOCTOR_GET_SUCCEESS, DOCTOR_REQ } from "../actionType"
import axios from "axios"

export const getdoctorsAction=(dispatch)=>{

    dispatch({type:DOCTOR_REQ})

    axios.get(`http://localhost:3001/doctors`)
    .then((res)=>{
        dispatch({type:DOCTOR_GET_SUCCEESS,payload:res.data})
        // console.log(res.data);
    })
    .catch((err)=>{
        dispatch({type:DOCTOR_FAIL,payload:err})
    })


}
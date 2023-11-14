import { CLINIC_FAIL, CLINIC_GET_SUCCEESS, CLINIC_REQ } from "../actionType"
import axios from "axios"

export const getclinicAction=(dispatch)=>{

    dispatch({type:CLINIC_REQ})

    axios.get(`http://localhost:3001/clinics`)
    .then((res)=>{
        dispatch({type:CLINIC_GET_SUCCEESS,payload:res.data})
        // console.log(res.data);
    })
    .catch((err)=>{
        dispatch({type:CLINIC_FAIL,payload:err})
    })


}
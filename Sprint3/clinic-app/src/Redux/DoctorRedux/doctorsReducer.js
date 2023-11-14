import { DOCTOR_FAIL, DOCTOR_GET_SUCCEESS, DOCTOR_REQ } from "../actionType"

const initialState={
    doctors:[],
    isLoading:false,
    isErr:false,
    err:""
}
export const doctorsReducer=(state=initialState,{type,payload})=>{
    switch(type){

        case DOCTOR_REQ:{
            return{
                ...state,isLoading:true
            }
        }
        case DOCTOR_FAIL:{
            return{
                ...state,isLoading:false, isErr:true,err:payload
            }
        }
        case DOCTOR_GET_SUCCEESS:{
            return{
                ...state,isLoading:false, doctors:payload
            }
        }

        default:{
            return state
        }
    }
}
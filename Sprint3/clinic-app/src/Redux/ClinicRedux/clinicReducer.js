import { CLINIC_FAIL, CLINIC_GET_SUCCEESS, CLINIC_REQ } from "../actionType"
const initialState={
    clinics:[],
    isLoading:false,
    isErr:false,
    err:""
}
export const clinicReducer=(state=initialState,{type,payload})=>{
    switch(type){

        case CLINIC_REQ:{
            return{
                ...state,isLoading:true
            }
        }
        case CLINIC_FAIL:{
            return{
                ...state,isLoading:false, isErr:true,err:payload
            }
        }
        case CLINIC_GET_SUCCEESS:{
            return{
                ...state,isLoading:false, clinics:payload
            }
        }

        default:{
            return state
        }
    }
}
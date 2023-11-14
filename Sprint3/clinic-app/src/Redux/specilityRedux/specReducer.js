import { SPECIALITY_FAIL,  SPECIALITY_GET_SUCCEESS,  SPECIALITY_REQ } from "../actionType"


const initialState={
    speciality:[],
    isLoading:false,
    isErr:false,
    err:""
}
export const specReducer=(state=initialState,{type,payload})=>{
    switch(type){

        case SPECIALITY_REQ:{
            return{
                ...state,isLoading:true
            }
        }
        case SPECIALITY_FAIL:{
            return{
                ...state,isLoading:false, isErr:true,err:payload
            }
        }
        case SPECIALITY_GET_SUCCEESS:{
            return{
                ...state,isLoading:false, speciality:payload
            }
        }

        default:{
            return state
        }
    }
}
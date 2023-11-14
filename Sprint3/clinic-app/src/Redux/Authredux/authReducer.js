import { LOGIN_FAIL, LOGIN_REQ, LOGIN_SUCCEESS } from "../actionType"

let inititalstate={
    isAuth:false,
    isLoading:false,
    isErr:false,
    currentuser:""
    
}
export const authReducer=(state=inititalstate,{type,payload})=>{
switch(type){

    case LOGIN_REQ:{
        return {
            ...state,isLoading:true
        }
    }
    case LOGIN_FAIL:{
        return {
            ...state,isLoading:false,isErr:true
        }
    }
    case LOGIN_SUCCEESS:{
        return {
            ...state,isLoading:false,isAuth:true,currentuser:payload
        }
    }
    default:{
        return state
    }
}
    
}
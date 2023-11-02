import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from "./actionType"

const initialState={
   notes:[]
    
}
export const formReducer=(state=initialState,{type,payload})=>{

    switch(type){
        
        case ADD_NOTE:{
            return{
                ...state,
                notes:[...state.notes,payload]
            }
        }
        case UPDATE_NOTE:{
            return{
               
            }
        }

        case DELETE_NOTE:{
            return{
                
            }
        }

        default:{
            return state
        }
    }

}
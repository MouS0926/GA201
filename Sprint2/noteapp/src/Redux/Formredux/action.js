import { ADD_NOTE } from "./actionType"
import { v4 as uuidv4 } from 'uuid';

export const addNotesAction=(newnote)=>(dispatch)=>{
    const uniqueID = uuidv4();

    const newNotewithId={ ...newnote, id: uniqueID }
dispatch({type:ADD_NOTE,payload:newNotewithId})
    
}
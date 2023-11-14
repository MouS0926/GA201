import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { doctorsReducer } from "./DoctorRedux/doctorsReducer";
import thunk from 'redux-thunk'
import { clinicReducer } from "./ClinicRedux/clinicReducer";
import { specReducer } from "./specilityRedux/specReducer";
import registrationReducer from "./Authredux/registerReducer";
import { authReducer } from "./Authredux/authReducer";


const rootReducer=combineReducers({
    clinicReducer,
    doctorsReducer,
    specReducer,
    registrationReducer,
    authReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
